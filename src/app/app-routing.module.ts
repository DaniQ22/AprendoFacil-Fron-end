import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './shared/loading/loading.component';

const routes: Routes = [
  {
    path: '', loadChildren: ()=> import('./customer/customer-routing.module').then(m=>m.CustomerRoutingModule)
  },
  {
    path: 'admin', loadChildren: () => import('./auth/auth-routing.module').then(m=>m.AuthRoutingModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./admin/admin-routing.module').then(m=>m.AdminRoutingModule),
  },
  {
    path : 'current-customer', loadChildren: () => import('./current-customer/customer-current-routing-module').then(m=>m.CurrentCustomerRoutingModule)
  },
  {
    path: 'loading', component: LoadingComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
