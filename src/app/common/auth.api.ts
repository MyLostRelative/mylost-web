import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { urlHelper } from '../config/api.config';

@Injectable()
export class AuthApi {
  httpClient: HttpClient;

  constructor(public http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    console.log('login: ', username, password);
    return this.http.post<any>(urlHelper.api('/users/login'), {
      username,
      password
    });
    // return null;
  }

  register(registerObj: any): Observable<any> {
    console.log('login: ', registerObj);
    return this.http.post<any>(urlHelper.api('/users/register'), registerObj);
    // return null;
  }
}
