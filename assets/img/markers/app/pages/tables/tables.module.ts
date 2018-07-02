import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SharedModule } from '../../@core/shared.module';


@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
  ],
})
export class TablesModule { }
