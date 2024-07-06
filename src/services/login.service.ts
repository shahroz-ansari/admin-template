import { http } from '../configs/http-client.config';

export type LoginRequestType = {
  data: {
    username: string;
    password: string;
  };
};

export interface LoginResponseType {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export async function loginAPI(request: LoginRequestType) {
  const url = 'auth/login';
  return http<LoginResponseType>({
    url,
    method: 'POST',
    ...request,
  });
}

export const loginAPIStoreKey = 'api.login';
