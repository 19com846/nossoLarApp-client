import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCollaboratorPage } from './home-collaborator.page';

describe('HomeCollaboratorPage', () => {
  let component: HomeCollaboratorPage;
  let fixture: ComponentFixture<HomeCollaboratorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCollaboratorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCollaboratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
