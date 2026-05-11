import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockTransferList } from './stock-transfer-list';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('StockTransferList', () => {
  let component: StockTransferList;
  let fixture: ComponentFixture<StockTransferList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTransferList, HttpClientTestingModule, RouterModule.forRoot([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTransferList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
