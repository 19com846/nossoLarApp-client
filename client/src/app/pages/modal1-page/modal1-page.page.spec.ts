import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1PagePage } from './modal1-page.page';

describe('Modal1PagePage', () => {
  let component: Modal1PagePage;
  let fixture: ComponentFixture<Modal1PagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal1PagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal1PagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
