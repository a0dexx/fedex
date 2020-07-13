import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { CustomValidationService } from '../../services/custom-validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']

})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private customValidator: CustomValidationService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      firstName: new FormControl('', {
        validators: [Validators.required,]
      }),
      lastName: new FormControl('', {
        validators: [Validators.required,]
      }),

      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,

          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$')


        ]
      }),


    }, {validators:  this.customValidator.validatePassword('firstName', 'lastName', 'password')});
  }




  onSubmit() {

    console.log(this.loginForm.controls.password.errors);
    console.log(this.loginForm);

    this.authService.login({
      firstName: this.loginForm.value.firstName,
      lastName: this.loginForm.value.lastName,

      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }
}
