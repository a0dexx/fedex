import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { Subscription } from 'rxjs';



xdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: any;
  const authServiceSpy = jasmine.createSpyObj('AuthService',['authChange']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        AppRoutingModule
      ],
      declarations: [ HeaderComponent ],
      providers:[{ provide: AuthService, useValue: authServiceSpy } ,AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
