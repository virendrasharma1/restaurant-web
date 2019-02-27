import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {catchError, map, tap} from 'rxjs/operators';
import {AppConstants} from '../shared/app.constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataStorageService} from './datastorage.service';
import {Router} from '@angular/router';


const endpoint = 'http://localhost:8080/restaurants';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable()
export class AppService {

  constructor(private http: HttpClient, private dataStorageService: DataStorageService,  private router: Router) {
  }

  static isNotEmpty(value: string) {
    return value !== null && value.length > 0;
  }

  createAuthorizationHeader() {
    const authToken = this.dataStorageService.read(AppConstants.AUTH_STORAGE_KEY);
    const deviceId = this.dataStorageService.read(AppConstants.DEVICE_STORAGE_KEY);
    const restaurantId = this.dataStorageService.read(AppConstants.SESSION_RESTAURANT_ID);

    if (AppService.isNotEmpty(restaurantId)) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('X-com-restaurant-id', restaurantId);
      headers.append('X-com-auth-token', authToken);
      headers.append('X-com-device-id', deviceId);
      return headers;
    }  else {
      this.router.navigate([AppConstants.LAUNCH_URL]);
    }
  }

  get(url): Observable<any> {
    return this.http.get(endpoint + url)
      .pipe(
        map(data => data));
  }

  post(url, payload): Observable<any> {
    return this.http.post<any>(endpoint + url, payload, {headers: this.createAuthorizationHeader()}).pipe(
      tap(data => data),
      catchError(this.handleError<any>('post'))
    );
  }

  put(url, payload): Observable<any> {
    return this.http.put(endpoint + url, payload, httpOptions).pipe(
      tap(data => data),
      catchError(this.handleError<any>('put'))
    );
  }

  delete(url): Observable<any> {
    return this.http.delete<any>(endpoint + url, httpOptions).pipe(
      tap(data => data),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }

}
