import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquityComponent } from './equity.component';
import { DividendAccrualComponent } from './dividend-accrual/dividend-accrual.component';
import { DividendReceiptComponent } from './dividend-receipt/dividend-receipt.component';;
import { OrderComponent } from './order/order.component';
import { PriceComponent } from './price/price.component';
import { TradeComponent } from './trade/trade.component';
import { ReturnComponent } from './return/return.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [{
  path: '',
  component: EquityComponent,
  children: [{ path: 'accrual', component: DividendAccrualComponent, },
  { path: 'receipt', component: DividendReceiptComponent, },
  { path: 'order', component: OrderComponent, },
  { path: 'price', component: PriceComponent, },
  { path: 'trade', component: TradeComponent, },
  { path: 'return', component: ReturnComponent, },
  { path: 'master', component: MasterComponent, },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquityRoutingModule { }

export const routedComponents = [
  EquityComponent,
  DividendAccrualComponent,
  DividendReceiptComponent,
  OrderComponent,
  PriceComponent,
  TradeComponent,
  ReturnComponent,
  MasterComponent,
];
