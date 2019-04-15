import { TestBed } from '@angular/core/testing';

import { ClassesApiService } from './classes-api.service';

describe('ClassesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassesApiService = TestBed.get(ClassesApiService);
    expect(service).toBeTruthy();
  });
});
