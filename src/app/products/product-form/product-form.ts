import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
})
export class ProductForm {
  product: Product = {
    id: 0,
    name: '',
    sku: '',
    categoryId: 0
  };

  isEdit = false;

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.service.getById(id).subscribe(data => {
        this.product = data;
      });
    }
  }

  save() {
    if (this.isEdit) {
      this.service.update(this.product.id, this.product).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.service.create(this.product).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }

}
