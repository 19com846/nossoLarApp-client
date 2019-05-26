import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassGroupsPage } from './my-class-groups.page';

describe('MyClassGroupsPage', () => {
  let component: MyClassGroupsPage;
  let fixture: ComponentFixture<MyClassGroupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClassGroupsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClassGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
