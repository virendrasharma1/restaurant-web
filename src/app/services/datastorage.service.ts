import {Injectable} from '@angular/core';
import {AppConstants} from '../shared/app.constants';
import {isNullOrUndefined} from 'util';

@Injectable()
export class DataStorageService {
  constructor () {}

  write(key: string, value: any) {
    if (value) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  read<T>(key: string): any {
    const value: string = localStorage.getItem(key);

    if (value && !isNullOrUndefined(value)) {
      return <T>JSON.parse(value);
    }

    return null;
  }

  remove<T>(key: string) {
    localStorage.removeItem(key);
  }

  clearLocalStorage() {
    this.remove(AppConstants.DEVICE_STORAGE_KEY);
    this.remove(AppConstants.AUTH_STORAGE_KEY);
    this.remove(AppConstants.SESSION_RESTAURANT_ID);
    this.remove(AppConstants.APP_USER_NAME);
    this.remove(AppConstants.APP_MEDIA_URL);
    this.remove(AppConstants.APP_MOBILE_NUMBER);
    this.remove(AppConstants.APP_EMAIL_ADDRESS);
    // this.remove(AppConstants.GCM_TOKEN);
  }

}
