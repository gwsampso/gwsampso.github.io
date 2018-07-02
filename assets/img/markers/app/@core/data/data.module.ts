// import { CashforecastService } from './../../pages/tables/fxPlanner/cash.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { CashforecastService } from './cashforecast.service';
import { StateService } from './state.service';

//Begin Omega

const SERVICES = [
  UserService,
  StateService,
  CashforecastService
  ];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
