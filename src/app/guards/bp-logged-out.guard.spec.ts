import { TestBed } from '@angular/core/testing';

import { BpLoggedOutGuard } from './bp-logged-out.guard';

describe('BpLoggedOutGuard', () => {
  let guard: BpLoggedOutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BpLoggedOutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
