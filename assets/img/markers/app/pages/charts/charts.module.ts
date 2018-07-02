import { NgModule } from '@angular/core';
// import { NgxEchartsModule } from 'ngx-echarts';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';


import { ThemeModule } from '../../@theme/theme.module';

import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { ChartjsBarComponent } from './chartjs/chartjs-bar.component';
import { ChartjsBarHorizontalComponent } from './chartjs/chartjs-bar-horizontal.component';

import { FetchDataEditService2 } from '../../@core/data/edit.service2';


const components = [
  ChartjsBarComponent,
  ChartjsBarHorizontalComponent  
];

@NgModule({
  imports: [ThemeModule, ChartsRoutingModule,
    // NgxEchartsModule, NgxChartsModule, 
    ChartModule],
  declarations: [...routedComponents, ...components],
  providers: [FetchDataEditService2]

})
export class ChartsModule {}
