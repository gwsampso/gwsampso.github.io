import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BondComponent } from './bond.component';
import { CouponAccrualComponent } from './coupon-accrual/coupon-accrual.component';
import { CouponReceiptComponent } from './coupon-receipt/coupon-receipt.component';
import { CreditRatingComponent } from './credit-rating/credit-rating.component';
import { CreditRatingMapComponent } from './credit-rating-map/credit-rating-map.component';
import { IndexFactorComponent } from './index-factor/index-factor.component';
import { IssuerComponent } from './issuer/issuer.component';
import { OrderComponent } from './order/order.component';
import { PriceAccruedComponent } from './price-accrued/price-accrued.component';
import { PriceCapitalComponent } from './price-capital/price-capital.component';
import { PriceDurationComponent } from './price-duration/price-duration.component';
import { PriceYieldComponent } from './price-yield/price-yield.component';
import { TradeComponent } from './trade/trade.component';
import { ReturnComponent } from './return/return.component';
import { TradeCompetitiveComponent } from './trade-competitive/trade-competitive.component';
import { MasterComponent } from './master/master.component';
import { TradeMaturityComponent } from './trade-maturity/trade-maturity.component';


const routes: Routes = [{
  path: '',
  component: BondComponent,
  children: [{ path: 'accrual', component: CouponAccrualComponent, },
  { path: 'receipt', component: CouponReceiptComponent, },
  { path: 'rating', component: CreditRatingComponent, },
  { path: 'rating-map', component: CreditRatingMapComponent, },
  { path: 'index-factor', component: IndexFactorComponent, },
  { path: 'issuer', component: IssuerComponent, },
  { path: 'order', component: OrderComponent, },
  { path: 'accrued', component: PriceAccruedComponent, },
  { path: 'capital', component: PriceCapitalComponent, },
  { path: 'duration', component: PriceDurationComponent, },
  { path: 'yield', component: PriceYieldComponent, },
  { path: 'trade', component: TradeComponent, },
  { path: 'return', component: ReturnComponent, },
  { path: 'competitive', component: TradeCompetitiveComponent, },
  { path: 'master', component: MasterComponent, },
  { path: 'maturity', component: TradeMaturityComponent, },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BondRoutingModule { }

export const routedComponents = [
  BondComponent,
  CouponAccrualComponent,
  CouponReceiptComponent,
  CreditRatingComponent,
  CreditRatingMapComponent,
  IndexFactorComponent,
  IssuerComponent,
  OrderComponent,
  PriceAccruedComponent,
  PriceCapitalComponent,
  PriceDurationComponent,
  PriceYieldComponent,
  TradeComponent,
  ReturnComponent,
  TradeCompetitiveComponent,
  MasterComponent,
  TradeMaturityComponent,
];
