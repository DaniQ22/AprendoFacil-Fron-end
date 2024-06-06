import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginAdminComponent } from './auth/login-admin/login-admin.component';
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { CustomerRoutingModule } from './customer/customer-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorInterceptor } from './core/Interceptor/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginAdminComponent,
    CustomerLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
