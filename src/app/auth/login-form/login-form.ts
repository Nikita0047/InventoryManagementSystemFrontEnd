import { Component } from '@angular/core';
import { SignIn } from '../../UserModels/sign-in';
import{ Router } from '@angular/router';
import { AuthService } from '../../UServices/auth.service';
import{ FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
signInData: SignIn = {
  email: '',
  password: ''  
}
  isLogin= false;
  errorMessage = '';
  constructor(private Service: AuthService, private router: Router) {}


  onSubmit() {
    this.isLogin = true;
    this.errorMessage = '';
    // Simulate login success or failure
   
    this.Service.login(this.signInData).subscribe({
      next: res => {
        this.isLogin = false;
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.isLogin= false;
        this.errorMessage = 'Invalid email or password';
        console.log(err);
      }
    });
  }

}
