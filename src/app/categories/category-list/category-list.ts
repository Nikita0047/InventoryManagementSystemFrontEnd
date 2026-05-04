import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  
@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.scss',
})
export class CategoryList {
categories :Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.loadCategories();
  }
  loadCategories() {
    this.categoryService.getAll().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }

  delete(id: number) {
    this.categoryService.delete(id).subscribe(() => {
      this.loadCategories();
    });
  }
}
