import { CategoryForm } from './categories/category-form/category-form';
import { CategoryList } from './categories/category-list/category-list';
import { ProductForm } from './products/product-form/product-form';
import { ProductList } from './products/product-list/product-list';
import { Routes } from '@angular/router';
import { WarehouseForm } from './warehouses/warehouse-form/warehouse-form';
import { WarehouseList } from './warehouses/warehouse-list/warehouse-list';
export const routes: Routes = [
  { path: 'products', component: ProductList},
  { path: 'add-product', component: ProductForm },
  { path: 'edit-product/:id', component: ProductForm },
  
  {path: 'categories', component: CategoryList},
  {path: 'add-category', component: CategoryForm},
  {path: 'edit-category/:id', component: CategoryForm},
  
  {path: 'warehouses', component: WarehouseList},
  {path: 'add-warehouse', component: WarehouseForm},
  {path: 'edit-warehouse/:id', component: WarehouseForm},

  { path: '**', redirectTo: 'products' },

];
