import type { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import { LoginAPIResponseType } from '../services/http/login.service';
import { refreshTokenAPI } from '../store/apis/refresh-token.api';
import { tokenUpdate } from '../store/slices/session.slice';
import { store } from '../store/store';

type RequestConfigOptionalKeys = Pick<
  AxiosRequestConfig,
  'headers' | 'params' | 'data' | 'baseURL'
>;
type RequestConfigRequiredKeys = Required<Pick<AxiosRequestConfig, 'url' | 'method'>>;

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export type RequestConfig = RequestConfigRequiredKeys & RequestConfigOptionalKeys;

const baseOptions: Partial<AxiosRequestConfig> = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance = axios.create(baseOptions);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().session.token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<unknown, CustomAxiosRequestConfig>) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;
    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const data = await store.dispatch(refreshTokenAPI());
        const token = (data?.payload as LoginAPIResponseType)?.token;
        if (token) {
          originalRequest.headers.common['Authorization'] = `Bearer ${token}`;
          store.dispatch(tokenUpdate(token));
          return axiosInstance(originalRequest);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

export function http<T>(options: RequestConfig) {
  return axiosInstance.request<T>({
    ...baseOptions,
    ...options,
    headers: {
      ...baseOptions.headers,
      ...options.headers,
    },
  });
}
