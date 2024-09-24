import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './cores/navbar/navbar.component';
import { LoginComponent } from './cores/login/login.component';
import { HomeComponent } from './components/landing/home/home.component';
import { AboutComponent } from './components/landing/about/about.component';
import { LandingNavComponent } from './cores/landing-nav/landing-nav.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CustomerComponent } from './components/admin/customer/customer.component';
import { RolelistComponent } from './components/admin/rolelist/rolelist.component';
import {HttpClientModule} from '@angular/common/http';
import { StaffsComponent } from './components/staffs/staffs.component';
import { DataTablesModule } from 'angular-datatables';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaleComponent } from './components/admin/sale/sale.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    LandingNavComponent,
    DashboardComponent,
    CustomerComponent,
    RolelistComponent,
    StaffsComponent,
    SaleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), 

    FormsModule,
    ReactiveFormsModule,
    
    
    
    // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
