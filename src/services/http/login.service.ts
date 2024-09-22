import { http } from '../../configs/http-client.config';
import type { LoginPayloadType } from '../../containers/login/auth.model';

export type LoginAPIRequestType = {
  data: LoginPayloadType;
};

export interface LoginAPIResponseType {
  id: string;
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
