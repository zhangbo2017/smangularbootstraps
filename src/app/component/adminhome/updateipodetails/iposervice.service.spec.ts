/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IposerviceService } from './iposervice.service';

describe('Service: Iposervice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IposerviceService]
    });
  });

  it('should ...', inject([IposerviceService], (service: IposerviceService) => {
    expect(service).toBeTruthy();
  }));
});
