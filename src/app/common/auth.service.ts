import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthApi } from './auth.api';
import { User } from './user.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private authApi: AuthApi) {}

  login(userName: string, password: string): Observable<any> {
    return this.authApi.login(userName, password);
  }

  register(userObj: User): Observable<any> {
    return this.authApi.register(userObj);
  }
}