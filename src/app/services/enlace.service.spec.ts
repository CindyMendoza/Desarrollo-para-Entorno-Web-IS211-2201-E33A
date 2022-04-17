import { TestBed } from '@angular/core/testing';

import { EnlaceService } from './enlace.service';

describe('EnlaceService', () => {
  let service: EnlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
