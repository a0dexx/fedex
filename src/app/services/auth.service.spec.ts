import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../material.module';

import { environment } from '../../environments/environment';

describe('AuthService', () => {
  let router: Router
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  let authService: AuthService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        MaterialModule,
        { provide: Router, useValue: mockRouter },
        AuthService,
        HttpClientTestingModule,
        RouterTestingModule,
      ]
    });

    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('signup method should POST and return successfully ', () => {

    let authInfo = { "firstName": "bob", "lastName": "smith", "email": "test@yahoo.co.uk", "password": "zzzzzzkkkkLLL" }

    expect(authService.signUp(authInfo)).toBeTruthy('its false')

    const req = httpTestingController.expectOne(environment.baseUrl);

    expect(req.request.method).toEqual("POST");

    const responseObject = {
      success: true,
      message: 'login was successful'
    };
    req.flush(responseObject);

  });

});
