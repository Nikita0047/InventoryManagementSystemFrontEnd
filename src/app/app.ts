import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList} from './products/product-list/product-list';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('InventoryApp');
}
