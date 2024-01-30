import { TestBed } from '@angular/core/testing';

import { InprofileService } from './inprofile.service';

describe('InprofileService', () => {
  let service: InprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
