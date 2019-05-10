import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassGroupPage } from './my-class-group.page';

describe('MyClassGroupPage', () => {
  let component: MyClassGroupPage;
  let fixture: ComponentFixture<MyClassGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClassGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClassGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
