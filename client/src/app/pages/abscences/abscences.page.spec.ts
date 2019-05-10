import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbscencesPage } from './abscences.page';

describe('AbscencesPage', () => {
  let component: AbscencesPage;
  let fixture: ComponentFixture<AbscencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbscencesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbscencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
