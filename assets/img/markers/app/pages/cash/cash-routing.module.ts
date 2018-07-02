import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashComponent } from './cash.component';
import { CashAccrualComponent } from './accrual/accrual.component';
import { CashMovementComponent } from './movement/movement.component';;
import { CashFlowComponent } from './flow/flow.component';

const routes: Routes = [{
  path: '',
  component: CashComponent,
  children: [{ path: 'accrual', component: CashAccrualComponent, },
  { path: 'movement', component: CashMovementComponent, },
  { path: 'flow', component: CashFlowComponent, },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashRoutingModule { }

export const routedComponents = [
  CashComponent,
  CashAccrualComponent,
  CashMovementComponent,
  CashFlowComponent,
];
