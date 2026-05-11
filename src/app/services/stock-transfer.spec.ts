import { TestBed } from '@angular/core/testing';

import { StockTransfer } from './stock-transfer';

describe('StockTransfer', () => {
  let service: StockTransfer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockTransfer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
