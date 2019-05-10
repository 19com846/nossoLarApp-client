import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollInCoursePage } from './enroll-in-course.page';

describe('EnrollInCoursePage', () => {
  let component: EnrollInCoursePage;
  let fixture: ComponentFixture<EnrollInCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollInCoursePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollInCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
