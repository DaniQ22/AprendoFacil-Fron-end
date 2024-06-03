import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: ()=> import('./customer/customer-routing.module').then(m=>m.CustomerRoutingModule)
  },
  {
    path: 'admin', loadChildren: () => import('./auth/auth-routing.module').then(m=>m.AuthRoutingModule)
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
