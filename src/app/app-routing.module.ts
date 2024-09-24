import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/landing/home/home.component';
import { AboutComponent } from './components/landing/about/about.component';
import { LoginComponent } from './cores/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { RolelistComponent } from './components/admin/rolelist/rolelist.component';

import { StaffsComponent } from './components/staffs/staffs.component';
import { SaleComponent } from './components/admin/sale/sale.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'rolelist',
    component: RolelistComponent
  }
  ,
  {
    path: 'stafflist',
    component: StaffsComponent
  }
  ,
  {
    path: 'sale',
    component: SaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
