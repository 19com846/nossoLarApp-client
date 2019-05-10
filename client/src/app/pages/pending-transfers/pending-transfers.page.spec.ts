import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTransfersPage } from './pending-transfers.page';

describe('PendingTransfersPage', () => {
  let component: PendingTransfersPage;
  let fixture: ComponentFixture<PendingTransfersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingTransfersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingTransfersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
