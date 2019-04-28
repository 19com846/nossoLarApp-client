import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoTurmaPage } from './informacao-turma.page';

describe('InformacaoTurmaPage', () => {
  let component: InformacaoTurmaPage;
  let fixture: ComponentFixture<InformacaoTurmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacaoTurmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacaoTurmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
