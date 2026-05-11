import { CategoryForm } from './categories/category-form/category-form';
import { CategoryList } from './categories/category-list/category-list';
import { ProductForm } from './products/product-form/product-form';
import { ProductList } from './products/product-list/product-list';
import { Routes } from '@angular/router';
import { WarehouseForm } from './warehouses/warehouse-form/warehouse-form';
import { WarehouseList } from './warehouses/warehouse-list/warehouse-list';
import { StockList } from './stocks/stock-list/stock-list';
import { StockForm } from './stocks/stock-form/stock-form';
import { StockTransferItemList } from './stocks/stock-transfer-item-list/stock-transfer-item-list';
import { StockTransferItemForm } from './stocks/stock-transfer-item-form/stock-transfer-item-form';
import { StockTransferList } from './stocks/stock-transfer-list/stock-transfer-list';
import { StockTransferForm } from './stocks/stock-transfer-form/stock-transfer-form';
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

  {path: 'stocktransfers', component: StockTransferList},
  {path: 'add-stocktransfer', component: StockTransferForm},
  {path: 'edit-stocktransfer/:id', component: StockTransferForm},

  {path: 'stocktransferitems', component: StockTransferItemList},
  {path: 'add-stocktransferitem', component: StockTransferItemForm},
  {path: 'edit-stocktransferitem/:id', component: StockTransferItemForm},

 


  { path: '**', redirectTo: 'products' },

];

 