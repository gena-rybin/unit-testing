import { TestBed } from '@angular/core/testing';

import { CheckValueService } from './check-value.service';

describe('CheckValueService', () => {
  let service: CheckValueService;

  beforeEach(() => {
    // service = new CheckValueService();

    TestBed.configureTestingModule({
      providers: [CheckValueService]
    });
    service = TestBed.inject(CheckValueService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check handler', () => {
    const check = service.check();
    expect(check).toBeTruthy();
  });
});
