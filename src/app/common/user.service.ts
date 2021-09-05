import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from './user-info.entity';
import { UserApi } from './user.api';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private userApi: UserApi) {}

  getUserInfo(userId: number): Observable<{result: UserInfo}> {
    return this.userApi.getUserInfo(userId);
  }
}
