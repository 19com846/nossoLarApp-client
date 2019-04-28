import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarNovoCursoStudentPage } from './cadastrar-novo-curso-student.page';

describe('CadastrarNovoCursoStudentPage', () => {
  let component: CadastrarNovoCursoStudentPage;
  let fixture: ComponentFixture<CadastrarNovoCursoStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarNovoCursoStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarNovoCursoStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
