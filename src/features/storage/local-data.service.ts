import { lStorage } from '../../utils/browser-storage.util';
import type { CustomThemeOptions } from '../app/app.model';
import { AppAuthTokenKey, AppThemeOptionsKey } from './storage-keys.constant';

class LocalDataService {
  getAppThemeOptions(): CustomThemeOptions {
    const d = lStorage.getItem(AppThemeOptionsKey);
    console.log(d);
    return JSON.parse(d || '{}');
  }
  setAppThemeOptions(theme: CustomThemeOptions) {
    lStorage.setItem(AppThemeOptionsKey, JSON.stringify(theme));
  }
  getAuthToken() {
    return lStorage.getItem(AppAuthTokenKey);
  }
  setAuthToken(token: string) {
    lStorage.setItem(AppAuthTokenKey, token);
  }
  clearStorage(keys: string[]) {
    keys.forEach((key) => localStorage.removeItem(key));
  }
}

export const localDataService = new LocalDataService();
