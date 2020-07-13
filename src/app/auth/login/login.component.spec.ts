import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { AppRoutingModule } from '../../app-routing.module';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: any;
  const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        AppRoutingModule,
         FormsModule,
        ],
      declarations: [LoginComponent],
      providers: [{ provide: AuthService, useValue: authServiceSpy }, AppRoutingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
});
