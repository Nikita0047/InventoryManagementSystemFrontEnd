import { TestBed } from '@angular/core/testing';

import { StockServices } from './stock.services';

describe('StockServices', () => {
  let service: StockServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
