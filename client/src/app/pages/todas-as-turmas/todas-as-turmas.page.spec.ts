import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasAsTurmasPage } from './todas-as-turmas.page';

describe('TodasAsTurmasPage', () => {
  let component: TodasAsTurmasPage;
  let fixture: ComponentFixture<TodasAsTurmasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodasAsTurmasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodasAsTurmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
