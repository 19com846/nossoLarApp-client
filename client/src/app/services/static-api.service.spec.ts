import { TestBed } from '@angular/core/testing';

import { StaticAPIService } from './static-api.service';

describe('StaticAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticAPIService = TestBed.get(StaticAPIService);
    expect(service).toBeTruthy();
  });
});
