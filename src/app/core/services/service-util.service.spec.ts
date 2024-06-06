import { TestBed } from '@angular/core/testing';

import { ServiceUtilService } from './service-util.service';

describe('ServiceUtilService', () => {
  let service: ServiceUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
