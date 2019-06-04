import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLessonPage } from './all-lesson.page';

describe('AllLessonPage', () => {
  let component: AllLessonPage;
  let fixture: ComponentFixture<AllLessonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLessonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLessonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
