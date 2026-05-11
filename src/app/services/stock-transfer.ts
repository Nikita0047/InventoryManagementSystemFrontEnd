import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class StockTransfer {
  private url = 'https://localhost:7079/api/StockTransfer';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<StockTransfer[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<StockTransfer>(`${this.url}/${id}`);
  }
  create(stockTransfer: any) {
    return this.http.post<StockTransfer>(this.url, stockTransfer);
  }

  update(id: number, stockTransfer: any) {
    return this.http.put<StockTransfer>(`${this.url}/${id}`, stockTransfer);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}