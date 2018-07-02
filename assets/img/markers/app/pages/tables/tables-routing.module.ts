import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { LogComponent } from './log/log.component';
import { fxPlannerComponent } from './fxPlanner/fxPlanner.component';
import { ApplicationRedemptionComponent } from './ApplicationRedemption/ApplicationRedemption.component';
import { CACSEntryComponent } from './CACSEntry/CACSEntry.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'log',
      component: LogComponent,
    },
    {
      path: 'fxplanner',
      component: fxPlannerComponent,
    },
    {
      path: 'ApplicationRedemption',
      component: ApplicationRedemptionComponent,
    },
      {
      path: 'CACSEntry',
      component: CACSEntryComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  LogComponent,
  fxPlannerComponent,
  ApplicationRedemptionComponent,
  CACSEntryComponent
];
