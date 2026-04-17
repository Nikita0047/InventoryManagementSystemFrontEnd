import { CategoryForm } from './categories/category-form/category-form';
import { CategoryList } from './categories/category-list/category-list';
import { ProductForm } from './products/product-form/product-form';
import { ProductList } from './products/product-list/product-list';
import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: 'products', component: ProductList},
  { path: 'add-product', component: ProductForm },
  { path: 'edit-product/:id', component: ProductForm },
  
  {path: 'categories', component: CategoryList},
  {path: 'add-category', component: CategoryForm},
  {path: 'edit-category/:id', component: CategoryForm},
  
  { path: '**', redirectTo: 'products' },

];
