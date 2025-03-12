import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HomeNavbarComponent } from '../home-navbar/home-navbar.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  router = inject(Router);
  loggedUserData: any;

  constructor() {
    const loggedData = localStorage.getItem('loginUser');
    if (loggedData != null) {
      this.loggedUserData = localStorage.getItem('loginUser');
    }
  }

  logOff() {
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login')
  }
}
