import { AES, enc, mode } from 'crypto-js';

const generateKeyIv = (secret: string) => {
  const key = enc.Utf8.parse(secret);
  const iv = enc.Utf8.parse(secret);
  return { key, iv, mode: mode.CTR };
};

export const aesEncrypt = function (message: string, secret: string) {
  const { key, iv, mode } = generateKeyIv(secret);

  return AES.encrypt(message, key, {
    iv,
    mode,
  })?.toString();
};

export const aesDecrypt = function (message: string, secret: string) {
  const { key, iv, mode } = generateKeyIv(secret);

  return AES.decrypt(message, key, {
    iv,
    mode,
  })?.toString(enc.Utf8);
};
