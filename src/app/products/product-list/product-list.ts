import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';   
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.html',
  imports: [RouterModule, CommonModule]
})
export class ProductList implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(() => {
      this.loadProducts();
    });
  }
}