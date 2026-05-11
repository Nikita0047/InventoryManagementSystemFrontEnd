import { TestBed } from '@angular/core/testing';

import { StockTransferItem } from './stock-transfer-item';

describe('StockTransferItem', () => {
  let service: StockTransferItem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockTransferItem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
