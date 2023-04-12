import { TestBed } from '@angular/core/testing';

import { BpHttpService } from './bp-http.service';

describe('BpHttpServiceService', () => {
  let service: BpHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
