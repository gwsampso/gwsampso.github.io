import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'reporting',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  },
   {
    path: 'masters',
    loadChildren: './masters/masters.module#MastersModule',
  },
  {
    path: 'bond',
    loadChildren: './bond/bond.module#BondModule',
  },
  {
    path: 'cash',
    loadChildren: './cash/cash.module#CashModule',
  },
  {
    path: 'equity',
    loadChildren: './equity/equity.module#EquityModule',
  },
  {
    path: 'future',
    loadChildren: './future/future.module#FutureModule',
  },
   {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
