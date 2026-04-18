import { Injectable } from '@angular/core';
import{ Warehouse } from '../models/warehouse';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  private apiUrl = 'https://localhost:7079/api/Warehouse';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Warehouse[]>(this.apiUrl);
  }

  getbyId(id: number) {
    return this.http.get<Warehouse>(`${this.apiUrl}/${id}`);
  }

  create(warehouse: Warehouse) {
    return this.http.post(this.apiUrl, warehouse);
  }

  update(id: number, warehouse: Warehouse) {
    return this.http.put(`${this.apiUrl}/${id}`, warehouse);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  
}
