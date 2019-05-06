import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsPage } from './all-students.page';

describe('AllStudentsPage', () => {
  let component: AllStudentsPage;
  let fixture: ComponentFixture<AllStudentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStudentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
