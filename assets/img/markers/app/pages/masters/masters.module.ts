import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { MastersRoutingModule, routedComponents } from './masters-routing.module';
import { SharedModule } from '../../@core/shared.module';


@NgModule({
  imports: [
    ThemeModule,
    MastersRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
  ],
})
export class MastersModule { }
