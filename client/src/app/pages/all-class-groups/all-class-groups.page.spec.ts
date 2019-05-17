import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClassGroupsPage } from './all-class-groups.page';

describe('AllClassGroupsPage', () => {
  let component: AllClassGroupsPage;
  let fixture: ComponentFixture<AllClassGroupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllClassGroupsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClassGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
