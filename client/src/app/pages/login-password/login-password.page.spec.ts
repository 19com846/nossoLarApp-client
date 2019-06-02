import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPasswordPage } from './login-password.page';

describe('LoginPasswordPage', () => {
  let component: LoginPasswordPage;
  let fixture: ComponentFixture<LoginPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
