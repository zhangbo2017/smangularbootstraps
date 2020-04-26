/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IposerviceService } from './iposervice.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Iposervice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([]),HttpClientTestingModule],
      providers: [IposerviceService]
    });
  });

  it('should ...', inject([IposerviceService], (service: IposerviceService) => {
    expect(service).toBeTruthy();
  }));
});
