import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
    // Your HTTP methods here
  

  private apiUrl = 'https://localhost:7079/api/Product';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: Product) {
    return this.http.post(this.apiUrl, product);
  }

  update(id: number, product: Product) {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
