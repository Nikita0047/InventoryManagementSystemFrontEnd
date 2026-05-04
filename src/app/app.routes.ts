import { CategoryForm } from './categories/category-form/category-form';
import { CategoryList } from './categories/category-list/category-list';
import { ProductForm } from './products/product-form/product-form';
import { ProductList } from './products/product-list/product-list';
import { Routes } from '@angular/router';
import { WarehouseForm } from './warehouses/warehouse-form/warehouse-form';
import { WarehouseList } from './warehouses/warehouse-list/warehouse-list';
import { StockList } from './stocks/stock-list/stock-list';
import { StockForm } from './stocks/stock-form/stock-form';
import { UserList } from './Users/user-list/user-list';
import { SignupForm } from './auth/signup-form/signup-form';
import { LoginForm } from './auth/login-form/login-form';
export const routes: Routes = [


  { path: 'signup', component: SignupForm },   // ← lowercase s
  { path: 'login',  component: LoginForm },

  { path: 'dashboard', component: ProductList },

  { path: 'Users', component: UserList, pathMatch: 'full' },
  

  { path: 'products', component: ProductList},
  { path: 'add-product', component: ProductForm },
  { path: 'edit-product/:id', component: ProductForm },
  
  {path: 'categories', component: CategoryList},
  {path: 'add-category', component: CategoryForm},
  {path: 'edit-category/:id', component: CategoryForm},
  
  {path: 'warehouses', component: WarehouseList},
  {path: 'add-warehouse', component: WarehouseForm},
  {path: 'edit-warehouse/:id', component: WarehouseForm},

  {path: 'stock', component: StockList},
  {path: 'add-stock', component: StockForm},
  {path: 'edit-stock/:id', component: StockForm},

 


  { path: '**', redirectTo: 'products' },

];
