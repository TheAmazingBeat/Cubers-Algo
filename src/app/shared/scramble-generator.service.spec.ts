import { TestBed } from '@angular/core/testing';

import { ScrambleGeneratorService } from './scramble-generator.service';

describe('ScrambleGeneratorService', () => {
  let service: ScrambleGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrambleGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
