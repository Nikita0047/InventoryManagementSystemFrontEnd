import { Component, OnInit } from '@angular/core';
import { StockTransfer } from '../../services/stock-transfer';
import { Stocktransfer } from '../../SModels/stocktransfer';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stock-transfer-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './stock-transfer-list.html',
  styleUrl: './stock-transfer-list.scss',
})
export class StockTransferList implements OnInit {
  stockTransfers: Stocktransfer[] = [];

  constructor(private service: StockTransfer) {}

  ngOnInit() {
    this.loadStockTransfers();
  }

  loadStockTransfers() {
    this.service.getAll().subscribe((data: any) => {
      console.log(data);
      this.stockTransfers = data;
    });
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this stock transfer?')) {
      this.service.delete(id).subscribe(() => {
        this.loadStockTransfers();
      });
    }
  }
}
