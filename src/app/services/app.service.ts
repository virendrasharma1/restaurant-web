import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs/index';
import {catchError, map, tap} from 'rxjs/operators';
import {AppConstants} from '../shared/app.constants';


const endpoint = 'http://localhost:8080/restaurants';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable()
export class AppService {

  constructor(private http: HttpClient) {
  }

  createUnAuthHeader() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-com-app-id', AppConstants.HEADER_APP_ID);
    return headers;
  }

  get(url): Observable<any> {
    return this.http.get(endpoint + url)
      .pipe(
        map(data => data));
  }

  post(url, payload): Observable<any> {
    return this.http.post<any>(endpoint + url, payload, {headers: this.createUnAuthHeader()}).pipe(
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
