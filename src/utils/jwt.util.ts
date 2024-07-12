import { TokenDataType } from '../models/app.model';

export const decodeJWT = (token: string) => {
  const [_, dataString] = token.split('.');
  const data = JSON.parse(atob(dataString));
  return data as TokenDataType;
};
