import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCollabsPage } from './all-collabs.page';

describe('AllCollabsPage', () => {
  let component: AllCollabsPage;
  let fixture: ComponentFixture<AllCollabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCollabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCollabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
