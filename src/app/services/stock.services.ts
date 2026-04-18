import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

import { Stock } from '../models/stock';
@Injectable({
  providedIn: 'root',
})
export class StockServices {

  private apiUrl = 'https://localhost:7079/api/Stock';

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<Stock[]>(this.apiUrl);
  }

  getById(id: number){
    return this.http.get<Stock>(`${this.apiUrl}/${id}`);
  }

  create(stock: Stock){
    return this.http.post<Stock>(this.apiUrl, stock);
  }

  update(id: number, stock: Stock){
    return this.http.put<Stock>(`${this.apiUrl}/${id}`, stock);
  }

  delete(id: number){
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}


