import {
  AppAuthTokenKey,
  AppThemeOptionsKey,
} from '../../constants/storage-keys.constant';
import { CustomThemeOptions } from '../../models/app.model';
import { lStorage } from '../../utils/browser-storage.util';

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
}

export const localDataService = new LocalDataService();
