import { TestBed, inject } from '@angular/core/testing';

import { TokenIntercentorService } from './token-intercentor.service';

describe('TokenIntercentorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenIntercentorService]
    });
  });

  it('should be created', inject([TokenIntercentorService], (service: TokenIntercentorService) => {
    expect(service).toBeTruthy();
  }));
});
