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

  it('should return false when the age younger than 10 years from now', () => {
    const input = new Date(2010, 0, 1);
    expect(subject.canEnter(input, 2018)).toBe(false);
  });

  it('should return false when the age is older than 1880', () => {
    const input = new Date(1820, 0, 1);
    expect(subject.canEnter(input, 2018)).toBe(false);
  });

  it('should return true when the age older than 10 years from set year', () => {
    const input = new Date(2004, 0, 1);
    expect(subject.canEnter(input, 2000)).toBe(true);
  });

});
