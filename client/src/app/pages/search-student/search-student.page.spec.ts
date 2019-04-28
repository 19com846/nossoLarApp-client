import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStudentPage } from './search-student.page';

describe('SearchStudentPage', () => {
  let component: SearchStudentPage;
  let fixture: ComponentFixture<SearchStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
