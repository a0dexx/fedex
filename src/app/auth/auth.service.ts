import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { User } from './user.model';

import { AuthData } from './auth-data.model';
import { UserData } from './user-data.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  authChange = new Subject<boolean>();
  private user;
  endpoint = environment.baseUrl;

  // NOTE TO DEVELOPER CHECKING THIS CODE
  // feel free to use this endpoint in the http.post method to see how
  // the UI reacts when the form is valid but the server returns an error
  errorEndpoint = environment.errorUrl;

  constructor(private router: Router, private http: HttpClient, private snackbar: MatSnackBar) {
  }

  loginUser(authData: AuthData) {

    //this needs to be implemented! for now log result and authorize successfully
    this.user = {
      email: authData.email,
      password: authData.password
    };
    this.authSuccessfully();
  }

  signup(userData: UserData) {
    this.user = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password
    };

    this.http.post(this.endpoint, this.user)
      .subscribe(() => {
        this.authSuccessfully();
      }, error => {
        //show a simple snackbar if the request fails
        console.log(error);
        this.showSnackbar('Unable to Sign In', '', 3000);
      });
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/']);
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/welcome']);
  }

  private showSnackbar(message, action, duration) {
    this.snackbar.open(message, action, { duration: duration });
  }
}

