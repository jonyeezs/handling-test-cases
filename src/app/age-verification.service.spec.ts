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

  const testCases = [
    { it: 'should return true when the age older than 10 years',
      inputs: { dob: new Date(2008, 0, 1), fromYear: 2018 },
      assert: true
    },
    { it: 'should return false when the age younger than 10 years from now',
      inputs: { dob: new Date(2010, 0, 1), fromYear: 2018 },
      assert: false
    },
    { it: 'should return false when the age is older than 1880',
      inputs: { dob: new Date(1820, 0, 1), fromYear: 2018 },
      assert: false
    },
    { it: 'should return true when the age older than 10 years from set year',
      inputs: { dob: new Date(2004, 0, 1), fromYear: 2000 },
      assert: true
    },
    { it: 'should return true when the age is younger than 1880',
      inputs: { dob: new Date(1881, 0, 1), fromYear: 2018 },
      assert: true
    },
    { it: 'should return false when the month of birth is Feb',
      inputs: { dob: new Date(2010, 0, 1), fromYear: 2018 },
      assert: false
    }
  ].forEach(tc => {
    it(tc.it, () => {
      expect(subject.canEnter(tc.inputs.dob, tc.inputs.fromYear)).toBe(tc.assert);
    });
  });
});
