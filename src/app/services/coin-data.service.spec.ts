import { TestBed } from '@angular/core/testing';

import { CoinDataService } from './coin-data.service';

describe('CoinDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoinDataService = TestBed.get(CoinDataService);
    expect(service).toBeTruthy();
  });
});
