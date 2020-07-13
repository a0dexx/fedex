import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { UserData } from './user-data.model';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user;

  constructor(private router: Router, private http: HttpClient) {
  }

  registerUser(authData: AuthData) {
    this.user = {

      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  login(userData: UserData) {
    this.user = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password
      // userId: Math.round(Math.random() * 10000).toString()
    };

    this.user = {};
    console.log('user info', this.user);

    this.http.post('https://demo-api.now.sh/users', this.user)
      .subscribe(() => {
        console.log('success');

        // this.authSuccessfully();
      }, error => {
        console.log(error);
      });

  }


  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  // getUser() {
  //   return { ...this.user };
  // }

  isAuth() {
    return this.user != null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/welcome']);
  }
}
