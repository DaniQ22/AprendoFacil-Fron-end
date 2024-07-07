import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentCustomerLayoutComponent } from './current-customer-layout/current-customer-layout.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseCardComponent } from '../customer/course-card/course-card.component';

const routes: Routes = [
    {
        path: '', component: CurrentCustomerLayoutComponent,
        children: [ 
            {
                path:'my-courses', component: MyCoursesComponent
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
export class CurrentCustomerRoutingModule { }
