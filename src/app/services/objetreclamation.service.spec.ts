import { TestBed } from '@angular/core/testing';

import { ObjetreclamationService } from './objetreclamation.service';

describe('ObjetreclamationService', () => {
  let service: ObjetreclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetreclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
