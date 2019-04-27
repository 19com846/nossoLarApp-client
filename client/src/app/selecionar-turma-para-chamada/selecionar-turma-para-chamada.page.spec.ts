import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarTurmaParaChamadaPage } from './selecionar-turma-para-chamada.page';

describe('SelecionarTurmaParaChamadaPage', () => {
  let component: SelecionarTurmaParaChamadaPage;
  let fixture: ComponentFixture<SelecionarTurmaParaChamadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarTurmaParaChamadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarTurmaParaChamadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
