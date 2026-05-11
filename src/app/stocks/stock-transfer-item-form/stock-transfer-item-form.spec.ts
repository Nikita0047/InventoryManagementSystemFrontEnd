import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransferItemForm } from './stock-transfer-item-form';

describe('StockTransferItemForm', () => {
  let component: StockTransferItemForm;
  let fixture: ComponentFixture<StockTransferItemForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTransferItemForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTransferItemForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
