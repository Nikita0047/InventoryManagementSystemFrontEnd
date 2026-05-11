import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class StockTransferItem {
  private apiurl = 'https://localhost:7079/api/StockTransferItem';

  constructor(private http:HttpClient) {}

  getAll() {
    return this.http.get<StockTransferItem[]>(this.apiurl);
  }

  getById(id: number) {
    return this.http.get<StockTransferItem>(`${this.apiurl}/${id}`);
  }

  create(stockTransferItem: any) {
    return this.http.post<StockTransferItem>(this.apiurl, stockTransferItem);
  }

  update(id: number, stockTransferItem: any) {
    return this.http.put<StockTransferItem>(`${this.apiurl}/${id}`, stockTransferItem);
  }
  delete(id: number) {
    return this.http.delete(`${this.apiurl}/${id}`);
  }
}
