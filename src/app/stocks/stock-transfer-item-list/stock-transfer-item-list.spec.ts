import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransferItemList } from './stock-transfer-item-list';

describe('StockTransferItemList', () => {
  let component: StockTransferItemList;
  let fixture: ComponentFixture<StockTransferItemList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTransferItemList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTransferItemList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
