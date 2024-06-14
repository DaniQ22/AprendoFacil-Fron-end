import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const permissionsGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  if(token){
    return true;
  }else{
    router.navigate(['admin']);
    alert("Inicie sesion antes de navegar a esta ruta")
    return false;
  }
};
