import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockTransferForm } from './stock-transfer-form';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('StockTransferForm', () => {
  let component: StockTransferForm;
  let fixture: ComponentFixture<StockTransferForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTransferForm, HttpClientTestingModule, RouterModule.forRoot([]), FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTransferForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
