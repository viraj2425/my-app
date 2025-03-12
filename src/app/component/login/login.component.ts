import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userObj = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) { }

  // Check if user is already logged in when the component initializes
  ngOnInit(): void {
    const loggedUser = localStorage.getItem('loginUser');
    if (loggedUser) {
      // User is already logged in, redirect to layout or desired route
      this.router.navigateByUrl('layout/main');
    }
  }

  onLogin(): void {
    if (!this.userObj.username || !this.userObj.password) {
      alert("Please enter both username and password.");
      return;
    }

    this.http.post('https://dummyjson.com/auth/login', this.userObj).subscribe({
      next: (res: any) => {
        if (res && res.username) {
          alert("Login successfully!");
          localStorage.setItem('loginUser', res.username);
          this.router.navigateByUrl('layout');
        } else {
          alert("User not found.");
        }
      },
      error: (err: any) => {
        console.error('Login error', err);
        alert("Invalid username or password.");
      }
    });
  }
}
