import { TestBed } from '@angular/core/testing';

import { PwaDataServiceService } from './pwa-data-service.service';

describe('PwaDataServiceService', () => {
  let service: PwaDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwaDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
