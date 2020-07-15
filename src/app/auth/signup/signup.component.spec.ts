import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { AuthService } from '../auth.service';
import { AppRoutingModule } from '../../app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { APP_BASE_HREF } from '@angular/common';


describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let authService: any;
  const authServiceSpy = jasmine.createSpyObj('AuthService', ['signup']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MaterialModule
      ],
      declarations: [SignupComponent],
      providers: [{ provide: AuthService, useValue: authServiceSpy }, {
        provide: APP_BASE_HREF,
        useValue: '/'
      }, AppRoutingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });


  it('first name field validity', () => {
    let errors = {};
    let firstName = component.loginForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();

    // firstName field is required
    errors = firstName.errors || {};
    expect(errors['required']).toBeTruthy();

    //  Set firstName to less than 2 characters
    firstName.setValue("l");
    errors = firstName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set firstName to something correct
    firstName.setValue("bob");
    errors = firstName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

  it('last name field validity', () => {
    let errors = {};
    let lastName = component.loginForm.controls['lastName'];
    expect(lastName.valid).toBeFalsy();

    // lastName field is required
    errors = lastName.errors || {};
    expect(errors['required']).toBeTruthy();

    //  Set lastName to less than 2 characters
    lastName.setValue("l");
    errors = lastName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set lastName to something correct
    lastName.setValue("bob");
    errors = lastName.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something not valid
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();

    // Set email to something valid
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
  });


  it('password field validity', () => {
    let errors = {};
    let password = component.loginForm.controls['password'];

    expect(password.valid).toBeFalsy();
    // password field is required
    errors = password.errors || {};

    expect(errors['required']).toBeTruthy();

    //  Set password to something lsess than 8 charchers
    password.setValue('es');
    errors = password.errors || {};

    expect(errors['pattern']).toBeTruthy();

    // Set password to 8+ characters but no uppercase
    password.setValue('eskasdldkass');
    errors = password.errors || {};
    expect(errors['pattern']).toBeTruthy();

    // Set password to be valid. 8+ characters, lower and uppercase letters
    password.setValue('adjklLLEIDadg');
    errors = password.errors || {};
    expect(errors['pattern']).toBeFalsy();
    expect(password.valid).toBeTruthy();

    // Set password containing first name
    let firstName = component.loginForm.controls['firstName'];
    let lastName = component.loginForm.controls['lastName'];
    firstName.setValue('bob');
    lastName.setValue('smith');

    password.setValue('boblLLEIDadg');
    errors = password.errors || {};

    expect(errors['passwordContainsNames']).toBeTruthy();

    // Set password containing last name
    password.setValue('smithlLLEIDadg');
    errors = password.errors || {};

    expect(errors['passwordContainsNames']).toBeTruthy();

  });


});
