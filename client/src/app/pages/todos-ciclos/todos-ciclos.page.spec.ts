import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosCiclosPage } from './todos-ciclos.page';

describe('TodosCiclosPage', () => {
  let component: TodosCiclosPage;
  let fixture: ComponentFixture<TodosCiclosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosCiclosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosCiclosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
