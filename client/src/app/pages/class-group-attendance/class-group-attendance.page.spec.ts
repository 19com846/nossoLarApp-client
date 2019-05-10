import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassGroupAttendancePage } from './class-group-attendance.page';

describe('ClassGroupAttendancePage', () => {
  let component: ClassGroupAttendancePage;
  let fixture: ComponentFixture<ClassGroupAttendancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassGroupAttendancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassGroupAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
