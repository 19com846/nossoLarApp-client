import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferClassGroupPage } from './transfer-class-group.page';

describe('TransferClassGroupPage', () => {
  let component: TransferClassGroupPage;
  let fixture: ComponentFixture<TransferClassGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferClassGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferClassGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
