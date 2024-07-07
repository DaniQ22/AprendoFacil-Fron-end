import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { HomeComponent } from './home/home.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component: CustomerLayoutComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'courses', component: CourseCardComponent
      },
      {
        path: 'login-user', component: LoginUserComponent
      },
      {
        path: 'register-user', component: RegisterComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
