import { TestBed } from '@angular/core/testing';

import { StaticApiService } from './static-api.service';

describe('StaticApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticApiService = TestBed.get(StaticApiService);
    expect(service).toBeTruthy();
  });
});
