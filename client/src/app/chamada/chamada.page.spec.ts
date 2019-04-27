import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaPage } from './chamada.page';

describe('ChamadaPage', () => {
  let component: ChamadaPage;
  let fixture: ComponentFixture<ChamadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
