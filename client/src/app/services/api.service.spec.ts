import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/services/api.service.spec.ts
import { APIService } from './api.service';

describe('APIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIService = TestBed.get(APIService);
=======
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
>>>>>>> Register by e-mail:client/src/app/auth/auth.service.spec.ts
    expect(service).toBeTruthy();
  });
});
