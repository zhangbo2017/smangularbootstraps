import { TestBed } from '@angular/core/testing';

import { CommoninfoService } from './commoninfo.service';

describe('CommoninfoService', () => {
  let service: CommoninfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommoninfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
