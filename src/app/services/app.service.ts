import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {catchError, map, tap} from 'rxjs/operators';
import {AppConstants} from '../shared/app.constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataStorageService} from './datastorage.service';
import {Router} from '@angular/router';
import {isNullOrUndefined} from 'util';


const endpoint = 'https://restaurants-services.herokuapp.com/restaurants';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AppService {

  constructor(private http: HttpClient, private dataStorageService: DataStorageService, private router: Router) {
  }

  isNotEmpty(value: string) {
    return value !== null && value.length > 0;
  }

  createAuthorizationHeader() {
    const authToken = this.dataStorageService.read(AppConstants.AUTH_STORAGE_KEY);
    const deviceId = this.dataStorageService.read(AppConstants.DEVICE_STORAGE_KEY);
    const restaurantId = this.dataStorageService.read(AppConstants.SESSION_RESTAURANT_ID);

    if (this.isNotEmpty(restaurantId)) {
      const headers =  new HttpHeaders({
        'Content-Type':  'application/json',
        'X-com-restaurant-id': restaurantId,
        'X-com-auth-token': authToken,
        'X-com-device-id': deviceId,
        'X-com-ip-address': '',
        'X-com-latitude': '',
        'X-com-longitude': '',
      });
      return headers;
    } else {
      this.router.navigate([AppConstants.LAUNCH_URL]);
    }
  }

  get(url): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get(endpoint + url, {
      headers: headers,
      observe: 'response'
    })
      .pipe(
        map(data => {
          if (data) {
            return this.statusCheck(data);
          }
        }));
  }

  post(url, payload): Observable<any> {
    return this.http.post<any>(endpoint + url, payload, {
      headers: this.createAuthorizationHeader(),
      observe: 'response'
    }).pipe(
      map(data => {
        if (data) {
          return this.statusCheck(data);
        }
      }),
      catchError(this.handleError<any>('post'))
    );
  }

  put(url, payload): Observable<any> {
    return this.http.put(endpoint + url, payload, {
      headers: this.createAuthorizationHeader(),
      observe: 'response'
    }).pipe(
      map(data => {
        if (data) {
          return this.statusCheck(data);
        }
      }),
      catchError(this.handleError<any>('put'))
    );
  }

  delete(url): Observable<any> {
    return this.http.delete<any>(endpoint + url, {headers: this.createAuthorizationHeader(), observe: 'response'}).pipe(
      map(data => {
        if (data) {
          return this.statusCheck(data);
        }
      }),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  statusCheck(response) {
    const data = response.body;
    if (data.appStatusCode === 10) {
      if (!isNullOrUndefined(this.dataStorageService.read(AppConstants.AUTH_STORAGE_KEY))) {
        alert('SESSION EXPIRED');
      }
      this.forceLogout();
    } else if (data.appStatusCode === 100 || data.appStatusCode === 4) {
      // this.serverErrorMessage(data);
    } else {
      this.saveAuthToken(response.headers);
      return data;
    }
  }

  saveAuthToken(headers: any) {
    const authToken = headers.get('X-com-auth-token');
    const deviceId = headers.get('X-com-device-id');
    const restaurantId = headers.get('X-com-restaurant-id');
    if (this.isNotEmpty(authToken) && this.isNotEmpty(deviceId) && this.isNotEmpty(restaurantId)) {
      this.dataStorageService.write(AppConstants.AUTH_STORAGE_KEY, authToken);
      this.dataStorageService.write(AppConstants.DEVICE_STORAGE_KEY, deviceId);
      this.dataStorageService.write(AppConstants.SESSION_RESTAURANT_ID, restaurantId);
    }
  }

  private forceLogout() {
    this.dataStorageService.clearLocalStorage();
    this.router.navigate([AppConstants.LAUNCH_URL]);
  }

  checkSessionValidity() {
    const restaurantId = this.dataStorageService.read(AppConstants.SESSION_RESTAURANT_ID);
    if (isNullOrUndefined(this.dataStorageService.read(AppConstants.AUTH_STORAGE_KEY)) || isNullOrUndefined(this.dataStorageService.read(AppConstants.DEVICE_STORAGE_KEY))) {
      if (!AppConstants.SESSION_NO_CHECK_URL.includes(this.router.url)) {
        alert('Session inactive');
        this.router.navigate([AppConstants.LAUNCH_URL]);
      }
    } else {
      if (AppConstants.SESSION_NO_CHECK_URL.includes(this.router.url)) {
        this.router.navigate([AppConstants.LANDING_URL]);
        return this.dataStorageService.read(AppConstants.SESSION_RESTAURANT_ID);
      }
      return this.dataStorageService.read(AppConstants.SESSION_RESTAURANT_ID);
    }
  }

}
