import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { urlHelper } from '../config/api.config';
import { ClientInfo } from './client-inco.entity';

@Injectable()
export class AuthApi {
  httpClient: HttpClient;

  constructor(public http: HttpClient) {}

  login(
    username: string,
    password: string
  ): Observable<{ result: { access_token: string } }> {
    return this.http.post<{ result: { access_token: string } }>(
      urlHelper.api('/auth/login'),
      {
        username,
        password
      }
    );
  }

  register(registerObj: any): Observable<{ result: { access_token: string } }> {
    return this.http.post<{ result: { access_token: string } }>(
      urlHelper.api('/users/register'),
      registerObj
    );
  }

  getClientDetails(): Observable<{ result: ClientInfo }> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<{ result: ClientInfo }>(urlHelper.api('/profile'), {
      headers
    });
  }
}
