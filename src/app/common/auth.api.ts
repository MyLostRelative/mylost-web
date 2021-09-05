import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { urlHelper } from '../config/api.config';

@Injectable()
export class AuthApi {
  httpClient: HttpClient;

  constructor(public http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(urlHelper.api('/auth/login'), {
      username,
      password
    });
  }

  register(registerObj: any): Observable<any> {
    return this.http.post<any>(urlHelper.api('/users/register'), registerObj);
  }

  getClientDetails(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<any>(urlHelper.api('/profile'), { headers });
  }
}
