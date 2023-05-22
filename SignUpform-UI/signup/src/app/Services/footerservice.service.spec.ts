import { TestBed } from '@angular/core/testing';

import { FooterserviceService } from './footerservice.service';

describe('FooterserviceService', () => {
  let service: FooterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
