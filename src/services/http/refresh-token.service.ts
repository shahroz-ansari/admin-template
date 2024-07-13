import { http } from '../../configs/http-client.config';

export type RefreshTokenRequestType = {
  headers: {
    token: string;
  };
};

export interface RefreshTokenResponseType {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export async function refreshTokenService(request: RefreshTokenRequestType) {
  const url = '/auth/refresh';
  return http<RefreshTokenResponseType>({
    url,
    method: 'POST',
    ...request,
  });
}
