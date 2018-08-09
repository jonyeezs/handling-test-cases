import { TestBed, inject } from '@angular/core/testing';

import { AgeVerificationService } from './age-verification.service';

describe('AgeVerificationService', () => {

  let subject: AgeVerificationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgeVerificationService]
    });

    subject = TestBed.get(AgeVerificationService);
  });

  it('should be created', () => {
    expect(subject).toBeTruthy();
  });

  it('should return true when the age older than 10 years', () => {
    const input = new Date(2008, 0, 1);
    expect(subject.canEnter(input, 2018)).toBe(true);
  });
});
