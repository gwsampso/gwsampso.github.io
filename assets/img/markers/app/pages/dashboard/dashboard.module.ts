import { DailyPerformanceComponent } from './dailyperformance/dailyperformance.component';
import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { CashforecastComponent } from './cashforecast/cashforecast.component';
import { GridCellDataPipe } from './electricity/electricity.component';
import {
  DxDataGridModule,
  DxSparklineModule,
  DxTemplateModule,
  DxTabPanelModule,
} from 'devextreme-angular';

import { DxTabsModule, DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  imports: [
    ThemeModule,
    DxDataGridModule,
    DxTemplateModule,
    DxSparklineModule,
    DxTabPanelModule,
    DxTabsModule,
    DxSelectBoxModule,
  ],
  declarations: [
    DashboardComponent,
    ElectricityComponent,
    CashforecastComponent,
    DailyPerformanceComponent,
    GridCellDataPipe,
    
  ],
})
export class DashboardModule { }
