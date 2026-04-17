import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl =  'https://localhost:7079/api/Category';

  constructor(private http: HttpClient) {}

   getAll() {
      return this.http.get<Category[]>(this.apiUrl);
    }
  
    getById(id: number) {
      return this.http.get<Category>(`${this.apiUrl}/${id}`);
    }
  
    create(category: Category) {
      return this.http.post(this.apiUrl, category);
    }
  
    update(id: number, category: Category) {
      return this.http.put(`${this.apiUrl}/${id}`, category);
    }
  
    delete(id: number) {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
