import { TestBed } from '@angular/core/testing';

import { TimeAPIService } from './time-api.service';

describe('TimeAPIService', () => {
  let service: TimeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
