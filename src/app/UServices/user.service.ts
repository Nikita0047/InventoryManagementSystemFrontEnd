import { Injectable } from '@angular/core';
import { UserResponse } from '../UserModels/user-response';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:7079/api/Users';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<UserResponse[]>(this.apiUrl);
  }

  getUserById(id: number){
    return this.http.get<UserResponse>(`${this.apiUrl}/${id}`);
  }

  updateUserRole(id: number, roleId: number) {
    return this.http.put(`${this.apiUrl}/${id}/role`, roleId );
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
