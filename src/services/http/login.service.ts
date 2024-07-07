import { http } from '../../configs/http-client.config';
import { LoginPayloadType } from '../../models/auth.model';

export type LoginAPIRequestType = {
  data: LoginPayloadType;
  headers: {
    token: string;
  };
};

export interface LoginAPIResponseType {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export async function loginService(request: LoginAPIRequestType) {
  const url = '/auth/login';
  return http<LoginAPIResponseType>({
    url,
    method: 'POST',
    ...request,
  });
}
