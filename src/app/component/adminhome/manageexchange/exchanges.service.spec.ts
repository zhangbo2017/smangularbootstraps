import { TestBed } from '@angular/core/testing';

import { ExchangesService } from './exchanges.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExchangesService', () => {
  let service: ExchangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([]),HttpClientTestingModule]
    });
    service = TestBed.inject(ExchangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
