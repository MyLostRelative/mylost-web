import { Injectable } from '@angular/core';
import { Subject, firstValueFrom, Observable } from 'rxjs';
import { AuthApi } from './auth.api';
import { ClientInfo } from './client-inco.entity';
import { User } from './user.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  clientInfo: ClientInfo;
  loggedIn: Subject<boolean> = new Subject();

  constructor(private authApi: AuthApi) {
    console.log('auth created');
  }

  login(
    username: string,
    password: string
  ): Observable<{ result: { access_token: string } }> {
    return this.authApi.login(username, password);
  }

  register(userObj: User): Observable<{ result: { access_token: string } }> {
    return this.authApi.register(userObj);
  }

  async getClientDetails() {
    this.clientInfo = (
      await firstValueFrom(this.authApi.getClientDetails())
    )?.result;
    console.log('got client info', this.clientInfo);
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    this.loggedIn.next(false);
  }
}
