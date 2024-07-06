import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

type RequestConfigOptionalKeys = Pick<
  AxiosRequestConfig,
  'headers' | 'params' | 'data' | 'baseURL'
>;
type RequestConfigRequiredKeys = Required<Pick<AxiosRequestConfig, 'url' | 'method'>>;

export type RequestConfig = RequestConfigRequiredKeys & RequestConfigOptionalKeys;

const baseOptions: Partial<AxiosRequestConfig> = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export function http<T>(options: RequestConfig) {
  return axios.request<T>({
    ...baseOptions,
    ...options,
    headers: {
      ...baseOptions.headers,
      ...options.headers,
    },
  });
}
