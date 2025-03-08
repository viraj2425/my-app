import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggedUser = localStorage.getItem('loginUser');
  if (loggedUser) {
    return true; // Allow access if the user is logged in
  } else {
    // Redirect to login if not logged in
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

};
