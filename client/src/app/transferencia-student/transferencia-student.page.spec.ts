import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaStudentPage } from './transferencia-student.page';

describe('TransferenciaStudentPage', () => {
  let component: TransferenciaStudentPage;
  let fixture: ComponentFixture<TransferenciaStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
