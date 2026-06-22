import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { auth } from '../firebase.config';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  if (auth.currentUser) {

    return true;

  }

  router.navigate(['/login']);

  return false;

};