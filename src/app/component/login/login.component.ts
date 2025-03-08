import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj: any = {
    username: '',
    password: ''
  };
  router = inject(Router);
  http = inject(HttpClient)

  onLogin() {
    this.http.post('https://dummyjson.com/auth/login', this.userObj).subscribe({
      next: (res: any) => {
        if (res) {
          alert("login successfully!");
          localStorage.setItem('loginUser', res.username);
          this.router.navigateByUrl('layout');
        } else {
          alert("user not found");
        }
      },
      error: (err: any) => {
        console.error('Login error', err);
        alert("User Invalid");
      }
    });
    // if (this.userObj.userName == "admin" && this.userObj.password == "1234") {
    // alert("login success");
    //localStorage.setItem('loginUser', this.userObj.userName)
    //this.router.navigateByUrl('layout')
    //} else {
    // alert("login declined")
    //}
  }
}