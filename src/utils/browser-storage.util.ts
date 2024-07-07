import { aesDecrypt, aesEncrypt } from './aes-encryption.util';

type Options = {
  encryption?: boolean;
  stringify?: boolean;
};

/**
 * A storage utility class to communicate with
 * local and session storage with option of AES encryption
 */
class BrowserStorage {
  private readonly key = import.meta.env.STORAGE_E_KEY;
  storage: Storage | null = null;
  constructor(storage: Storage | null) {
    this.storage = storage;
  }

  getItem(key: string, options: Options = {}) {
    let value = this.storage?.getItem(key);
    if (!value) return undefined;

    if (options.encryption) value = aesDecrypt(value, this.key!);
    return value;
  }
  setItem(key: string, value: string, options: Options = {}) {
    if (options.encryption) value = aesEncrypt(value, this.key!);
    return this.storage?.setItem(key, value);
  }
  removeItem(key: string) {
    return this.storage?.removeItem(key);
  }
}

export const lStorage = new BrowserStorage(window.localStorage);
export const sStorage = new BrowserStorage(window.sessionStorage);
