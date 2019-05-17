import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransferPage } from './new-transfer.page';

describe('NewTransferPage', () => {
  let component: NewTransferPage;
  let fixture: ComponentFixture<NewTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTransferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
