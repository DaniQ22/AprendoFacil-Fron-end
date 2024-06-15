import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { questionsGuard } from './questions.guard';

describe('questionsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => questionsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
