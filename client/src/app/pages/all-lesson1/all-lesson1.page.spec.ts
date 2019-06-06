import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLesson1Page } from './all-lesson1.page';

describe('AllLesson1Page', () => {
  let component: AllLesson1Page;
  let fixture: ComponentFixture<AllLesson1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLesson1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLesson1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
