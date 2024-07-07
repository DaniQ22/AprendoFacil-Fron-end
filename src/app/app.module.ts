import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginAdminComponent } from './auth/login-admin/login-admin.component';
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpErrorInterceptor } from './core/Interceptor/error.interceptor';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuhtInterceptor } from './core/Interceptor/interceptor-token';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { ListCursosComponent } from './admin/list-cursos/list-cursos.component';
import { AddCursoComponent } from './admin/add-curso/add-curso.component';
import { CourseDetailComponent } from './admin/course-detail/course-detail.component';
import { FormTopicComponent } from './admin/util-components/form-topic/form-topic.component';
import { CardTopicComponent } from './admin/util-components/card-topic/card-topic.component';
import { TopicDetailsComponent } from './admin/util-components/topic-details/topic-details.component';
import { QuestionsComponent } from './admin/util-components/questions/questions.component';
import { CourseCardComponent } from './customer/course-card/course-card.component';
import { HomeComponent } from './customer/home/home.component';
import { CurrentCustomerLayoutComponent } from './current-customer/current-customer-layout/current-customer-layout.component';
import { NavCurrentCustomerComponent } from './shared/nav-current-customer/nav-current-customer.component';
import { LoginUserComponent } from './customer/login-user/login-user.component';
import { RegisterComponent } from './customer/register/register.component';
import { WelcomeComponent } from './current-customer/welcome/welcome.component';
import { SearchCourseComponent } from './shared/search-course/search-course.component';
import { MyCoursesComponent } from './current-customer/my-courses/my-courses.component';
import { IndicatorCourseComponent } from './shared/indicator-course/indicator-course.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NotFoundCourseBySearchComponent } from './shared/not-found-course-by-search/not-found-course-by-search.component';
import { NotFoundCourseComponent } from './shared/not-found-course/not-found-course.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginAdminComponent,
    CustomerLayoutComponent,
    NavBarComponent,
    FooterComponent,
    SideBarComponent,
    ListCursosComponent,
    AddCursoComponent,
    CourseDetailComponent,
    FormTopicComponent,
    CardTopicComponent,
    TopicDetailsComponent,
    QuestionsComponent,
    CourseCardComponent,
    HomeComponent,
    CurrentCustomerLayoutComponent,
    NavCurrentCustomerComponent,
    LoginUserComponent,
    RegisterComponent,
    WelcomeComponent,
    SearchCourseComponent,
    MyCoursesComponent,
    IndicatorCourseComponent,
    LoadingComponent,
    NotFoundCourseBySearchComponent,
    NotFoundCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor, 
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuhtInterceptor, 
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
