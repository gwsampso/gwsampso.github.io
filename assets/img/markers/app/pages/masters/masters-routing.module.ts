import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersComponent } from './masters.component';
import { OptionMasterComponent } from './option/option-master.component';
import { PortfolioMasterComponent } from './portfolio/portfolio-master.component';
import { MoneyMasterComponent } from './money/money-master.component';
import { RefRateMasterComponent } from './refrate/refrate-master.component';
import { IndexMasterComponent } from './index/index-master.component';
import { RefRateMemberMasterComponent } from './refratemember/refratemember-master.component';

const routes: Routes = [{
  path: '',
  component: MastersComponent,
  children: [{
    path: 'option-master',
    component: OptionMasterComponent,
  },
  {
    path: 'portfolio-master',
    component: PortfolioMasterComponent,
  },
  {
    path: 'money-master',
    component: MoneyMasterComponent,
  },
  {
    path: 'index-master',
    component: IndexMasterComponent,
  },
    {
      path: 'refrate-master',
      component: RefRateMasterComponent,
    },
    {
      path: 'refrate-member',
      component: RefRateMemberMasterComponent,
    },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersRoutingModule { }

export const routedComponents = [
  MastersComponent,
  OptionMasterComponent,
  PortfolioMasterComponent,
  MoneyMasterComponent,
  IndexMasterComponent,
  RefRateMasterComponent,
  RefRateMemberMasterComponent,
];
