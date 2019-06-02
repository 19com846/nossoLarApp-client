import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { RegisterResponse } from  './register-response';
import * as Constants from '../../constants';
import { AuthResponse } from './auth-response';
import { LoginCredentials } from './login-credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER_ADDRESS:  string  =  Constants.API_URL;
  authSubject  =  new BehaviorSubject(false);

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  register(user: User) {
    return this.httpClient.post<RegisterResponse>(`${this.AUTH_SERVER_ADDRESS}/register/`, user).pipe(
      tap(async (res: RegisterResponse) => {
        if (res.user) {
          await this.storage.set("ACCESS_TOKEN", res.user.password);
          this.authSubject.next(true);
        }
      })
    );
  }

  login(user: LoginCredentials): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login/`, user).pipe(
      tap(async (res: AuthResponse) => {
        if (res.token) {
          console.log(res);
          await this.storage.set("ACCESS_TOKEN", res.token);
          this.authSubject.next(true);
        }
      })
    );
  }

  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    this.authSubject.next(false);
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }
}
