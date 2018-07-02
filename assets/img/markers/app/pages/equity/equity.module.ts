import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { EquityRoutingModule, routedComponents } from './equity-routing.module';
import { SharedModule } from '../../@core/shared.module';

@NgModule({
  imports: [
    ThemeModule,
    EquityRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
  ],
})
export class EquityModule { }
