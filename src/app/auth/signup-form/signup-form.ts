import { Component } from '@angular/core';
import { AuthService } from '../../UServices/auth.service';
import { SignUp } from '../../UserModels/sign-up';
import{ Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.scss',
})
export class SignupForm {
  signUpData: SignUp = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private Service: AuthService,
        private router: Router
  ) {}    

  onSubmit() {
    if(this.signUpData.password !== this.signUpData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    this.isLoading =true;
    this.errorMessage = ' ';
    this.Service.register(this.signUpData).subscribe({
      next: res=>{
        this.isLoading = false;
        this.successMessage = 'Account created successfully!';
        // after signup redirect to login
        this.router.navigate(['/login']);
      },
      error: err => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Signup failed. Try again.';
      }
    })
  }



}
