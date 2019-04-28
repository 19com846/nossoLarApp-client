import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaAdmPage } from './transferencia-adm.page';

describe('TransferenciaAdmPage', () => {
  let component: TransferenciaAdmPage;
  let fixture: ComponentFixture<TransferenciaAdmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaAdmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
