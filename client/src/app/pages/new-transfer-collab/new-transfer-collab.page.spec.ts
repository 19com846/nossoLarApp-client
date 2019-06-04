import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransferCollabPage } from './new-transfer-collab.page';

describe('NewTransferCollabPage', () => {
  let component: NewTransferCollabPage;
  let fixture: ComponentFixture<NewTransferCollabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTransferCollabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransferCollabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
