import { TestBed } from '@angular/core/testing';

import { AbsenceApiService } from './absence-api.service';

describe('AbsenceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbsenceApiService = TestBed.get(AbsenceApiService);
    expect(service).toBeTruthy();
  });
});
