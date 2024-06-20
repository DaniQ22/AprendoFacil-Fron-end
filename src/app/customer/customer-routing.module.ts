import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { HomeComponent } from './home/home.component';
import { CourseCardComponent } from './course-card/course-card.component';

const routes: Routes =[ 
  {
    path: '', component: CustomerLayoutComponent,
    children: [
      {
        path: 'index', component: HomeComponent
      },
      {
        path: 'courses', component: CourseCardComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
