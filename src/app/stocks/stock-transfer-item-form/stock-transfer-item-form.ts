import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockTransferItem } from '../../services/stock-transfer-item';
import { StockTransferItem as StockTransferItemModel } from '../../SModels/stock-transfer-item';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-stock-transfer-item-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-transfer-item-form.html',
  styleUrl: './stock-transfer-item-form.scss'
})
export class StockTransferItemForm implements OnInit {
  item: StockTransferItemModel = {
    id: 0,
    productId: 0,
    productName: '',
    quantity: 0
  };

  products: Product[] = [];
  isEdit = false;

  constructor(
    private itemService: StockTransferItem,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.itemService.getById(+id).subscribe((data: any) => {
        this.item = data;
      });
    }
  }

  loadProducts(): void {
    this.productService.getAll().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  save(): void {
    if (this.isEdit) {
      this.itemService.update(this.item.id, this.item).subscribe(() => {
        this.router.navigate(['/stock-transfer-items']);
      });
    } else {
      this.itemService.create(this.item).subscribe(() => {
        this.router.navigate(['/stock-transfer-items']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/stock-transfer-items']);
  }
}
