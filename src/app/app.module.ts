import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginAdminComponent } from './auth/login-admin/login-admin.component';
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { CustomerRoutingModule } from './customer/customer-routing.module';

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
    CustomerRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
