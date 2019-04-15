import { TestBed } from '@angular/core/testing';

import { StudentsApiService } from './students-api.service';

describe('StudentsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentsApiService = TestBed.get(StudentsApiService);
    expect(service).toBeTruthy();
  });
});
