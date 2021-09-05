import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { urlHelper } from '../config/api.config';
import { UserInfo } from './user-info.entity';

@Injectable()
export class UserApi {
  httpClient: HttpClient;

  constructor(public http: HttpClient) {}

  getUserInfo(userId: number): Observable<{ result: UserInfo }> {
    return this.http.get<{ result: UserInfo }>(urlHelper.api(`/users/${userId}`));
  }
}
