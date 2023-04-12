import { TestBed } from '@angular/core/testing';

import { BpLoggedInGuard } from './bp-logged-in.guard';

describe('BpLoggedInGuardGuard', () => {
  let guard: BpLoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BpLoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
