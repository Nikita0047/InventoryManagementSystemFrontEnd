import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import{ SignIn } from '../UserModels/sign-in';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthResponse } from '../UserModels/auth-response';
import{ SignUp } from '../UserModels/sign-up';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  
  private apiUrl = 'https://localhost:7079/api/Auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(data: SignIn){
    const params = new HttpParams()
    .set('Email', data.email)
    .set('Password', data.password);
    return this.http.post<AuthResponse>(`${this.apiUrl}/Signin`,   null,          // ← body is empty
      { params }  ).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('permissions', JSON.stringify(res.permissions));
        localStorage.setItem('roles', JSON.stringify(res.roles));
      })
    );
  }
  register(data: SignUp) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/Signup`, data);
  }
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
