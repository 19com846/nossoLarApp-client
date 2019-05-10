import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministratorPage } from './home-administrator.page';

describe('HomeAdministratorPage', () => {
  let component: HomeAdministratorPage;
  let fixture: ComponentFixture<HomeAdministratorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdministratorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdministratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
