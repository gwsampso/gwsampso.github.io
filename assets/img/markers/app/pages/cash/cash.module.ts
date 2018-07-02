import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CashRoutingModule, routedComponents } from './cash-routing.module';
import { SharedModule } from '../../@core/shared.module';


@NgModule({
  imports: [
    ThemeModule,
    CashRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,

  ],
  providers: [
  ],
})
export class CashModule { }
