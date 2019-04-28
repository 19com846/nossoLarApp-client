import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasCadastradasPage } from './pessoas-cadastradas.page';

describe('PessoasCadastradasPage', () => {
  let component: PessoasCadastradasPage;
  let fixture: ComponentFixture<PessoasCadastradasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasCadastradasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasCadastradasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
