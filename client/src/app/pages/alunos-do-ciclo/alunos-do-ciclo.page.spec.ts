import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosDoCicloPage } from './alunos-do-ciclo.page';

describe('AlunosDoCicloPage', () => {
  let component: AlunosDoCicloPage;
  let fixture: ComponentFixture<AlunosDoCicloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosDoCicloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosDoCicloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
