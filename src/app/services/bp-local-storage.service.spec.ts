import { TestBed } from '@angular/core/testing';

import { BpLocalStorageService } from './bp-local-storage.service';

describe('BpLocalStorageServiceService', () => {
  let service: BpLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
