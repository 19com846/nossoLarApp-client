import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeStudentInfoPage } from './see-student-info.page';

describe('SeeStudentInfoPage', () => {
  let component: SeeStudentInfoPage;
  let fixture: ComponentFixture<SeeStudentInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeStudentInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeStudentInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
