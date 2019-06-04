import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAttendanceGroupPage } from './all-attendance-group.page';

describe('AllAttendanceGroupPage', () => {
  let component: AllAttendanceGroupPage;
  let fixture: ComponentFixture<AllAttendanceGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAttendanceGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAttendanceGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
