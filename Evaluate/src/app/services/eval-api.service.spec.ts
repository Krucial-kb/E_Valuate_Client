import { TestBed } from '@angular/core/testing';

import { EvalAPIService } from './eval-api.service';

describe('EvalAPIService', () => {
  let service: EvalAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvalAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
