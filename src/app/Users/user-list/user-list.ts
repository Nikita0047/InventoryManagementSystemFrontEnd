import { Component } from '@angular/core';
import { UserService } from '../../UServices/user.service';
import { UserResponse } from '../../UserModels/user-response';
import{ FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  standalone: true, 
  imports: [FormsModule, CommonModule,DatePipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  users: UserResponse[] = [];
  IsLoaded = false;
  error = ''; 

  constructor(private userService: UserService) {}

  ngOnInit():void {
    this.loadUsers();
    console.log("user is loaded.")
  }

  loadUsers():void {
    this.IsLoaded = true;
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.IsLoaded = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to load users.';
        this.IsLoaded = false;
      }
    });
  }

  deleteUser(id: number): void {
    if(confirm('Are you sure you want to delete this user?')) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== id);
      },
      error: err => {
        this.error= 'Failed to delete user';
      }
    });}
  }
}
