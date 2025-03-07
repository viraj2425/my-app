import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
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
    this.http.post('https://dummyjson.com/auth/login', this.userObj).subscribe((res: any) => {
      if (res) {
        alert("login successfully!");
        localStorage.setItem('loginUser', res.username);
        this.router.navigateByUrl('layout');
      } else {
        alert("user not found");
      }
    })
    // if (this.userObj.userName == "admin" && this.userObj.password == "1234") {
    // alert("login success");
    //localStorage.setItem('loginUser', this.userObj.userName)
    //this.router.navigateByUrl('layout')
    //} else {
    // alert("login declined")
    //}
  }
}
