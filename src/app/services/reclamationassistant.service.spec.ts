import { TestBed } from '@angular/core/testing';

import { ReclamationassistantService } from './reclamationassistant.service';

describe('ReclamationassistantService', () => {
  let service: ReclamationassistantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamationassistantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
