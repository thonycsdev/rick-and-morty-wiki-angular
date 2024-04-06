import { TestBed } from '@angular/core/testing';

import { RickMortyApiServiceService } from './rick-morty-api-service.service';

describe('RickMortyApiServiceService', () => {
  let service: RickMortyApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickMortyApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
