import { Injectable } from '@angular/core';

@Injectable()
export class AgeVerificationService {

  constructor() { }

  canEnter(dob: Date, fromYear: number): boolean {
    return fromYear - dob.getFullYear() >= 10;
  }
}
