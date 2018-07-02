import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { BondRoutingModule, routedComponents } from './bond-routing.module';
import { SharedModule } from '../../@core/shared.module';

@NgModule({
  imports: [
    ThemeModule,
    BondRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
  ],
})
export class BondModule { }
