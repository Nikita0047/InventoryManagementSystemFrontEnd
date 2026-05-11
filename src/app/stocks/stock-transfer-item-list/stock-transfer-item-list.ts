import { Component } from '@angular/core';
import{ OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import{ CommonModule } from '@angular/common';
import{ StockTransferItem } from '../../services/stock-transfer-item';
import{ StockTransferItem as StockTransferItemModel } from '../../SModels/stock-transfer-item';
@Component({
  selector: 'app-stock-transfer-item-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './stock-transfer-item-list.html',
  styleUrl: './stock-transfer-item-list.scss',
})
export class StockTransferItemList  implements OnInit{  

  stockTransferItems: StockTransferItemModel[] = [];

  constructor(private ItemService: StockTransferItem) {}

  ngOnInit(): void {
       this.loadItems();
 }

  loadItems(): void {
    this.ItemService.getAll().subscribe((data: any) => {
   this.stockTransferItems = data;     });
  }

  delete(id: number):void {
    if (confirm('Are you sure you want to delete this item?')) {
        this.ItemService.delete(id).subscribe(() => {
          this.stockTransferItems = this.stockTransferItems.filter(item => item.id !== id);
        });
    }
  }
}
