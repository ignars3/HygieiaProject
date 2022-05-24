import { TestBed } from '@angular/core/testing';

import { NotDoctorGuard } from './not-doctor.guard';

describe('NotDoctorGuard', () => {
  let guard: NotDoctorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotDoctorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
