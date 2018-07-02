import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutureComponent } from './future.component';
import { OrderComponent } from './order/order.component';
import { PriceComponent } from './price/price.component';
import { DurationComponent } from './duration/duration.component';
import { YieldComponent } from './yield/yield.component';
import { TradeComponent } from './trade/trade.component';
import { ReturnComponent } from './return/return.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [{
  path: '',
  component: FutureComponent,
  children: [
  { path: 'order', component: OrderComponent, },
  { path: 'price', component: PriceComponent, },
  { path: 'duration', component: DurationComponent, },
  { path: 'yield', component: YieldComponent, },
  { path: 'trade', component: TradeComponent, },
  { path: 'return', component: ReturnComponent, },
  { path: 'master', component: MasterComponent, },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutureRoutingModule { }

export const routedComponents = [
  FutureComponent,
  OrderComponent,
  PriceComponent,
  DurationComponent,
  YieldComponent,
  TradeComponent,
  ReturnComponent,
  MasterComponent,
];
