import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdminsPage } from './all-admins.page';

describe('AllAdminsPage', () => {
  let component: AllAdminsPage;
  let fixture: ComponentFixture<AllAdminsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAdminsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAdminsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
