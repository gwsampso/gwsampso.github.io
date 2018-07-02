import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { FetchDataEditService2 } from '../../../@core/data/edit.service2';
import * as _ from "lodash";

@Component({
  selector: 'ngx-chartjs-bar-horizontal',
  template: `
  <div class="col-lg-12">
  <div class="row">
   <div class="col-lg-6">
    <nb-card>
      <nb-card-header>Asset Class 1</nb-card-header>
      <nb-card-body style="height:100%">
       <chart style="height:480px" type="bar" [data]="A1" [options]="A1options"></chart>
      </nb-card-body>
    </nb-card>
    </div>
    <div class="col-lg-6">
    <nb-card>
      <nb-card-header>Asset Class 2</nb-card-header>
      <nb-card-body style="height:100%" >
        <chart style="height:480px" type="horizontalBar" [data]="A2" [options]="A1options"></chart>
      </nb-card-body>
    </nb-card>
    </div>
    </div>
  </div>  
    <div class="col-lg-12">
  <div class="row">
   <div class="col-lg-6">
    <nb-card>
      <nb-card-header>Structure</nb-card-header>
      <nb-card-body style="height:100%">
        <chart style="height:480px" type="bar" [data]="A4" [options]="A1options"></chart>
      </nb-card-body>
    </nb-card>
    </div>
    <div class="col-lg-6">
    <nb-card>
      <nb-card-header>Style</nb-card-header>
      <nb-card-body style="height:100%" >
        <chart style="height:480px" type="horizontalBar" [data]="A3" [options]="A1options"></chart>
      </nb-card-body>
    </nb-card>
    </div>
    </div>
  </div>  
  `,
})
export class ChartjsBarHorizontalComponent implements OnDestroy {
  A1: any;
  A2: any;
  A3: any;
  A4: any;
  A1options: any;
  A2options: any;
  A3options: any;
  A4options: any;
  themeSubscription: any;
  valueDate: Date;

  constructor(private theme: NbThemeService, private _MasterService: FetchDataEditService2) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.valueDate = this._MasterService.addBusinessDays(new Date(Date.now()), -7)

      const datestring = this._MasterService.dateString(this.valueDate);

      this._MasterService.getRegularNoDB('RLT/getDailyPerformance?valueDate=' + datestring)
        .subscribe((data: any) => {
          var output =
            _(data)
              .groupBy('AssetClass1')
              .map((objs, key) => ({
                'AssetClass1': key,
                'GAV': _.sumBy(objs, 'GAV') / 1000000
              }))
              .value();                    
          
          this.A1 = {
            labels: Object.keys(output).map(index => output[index].AssetClass1),
            datasets: [{
              // label: 'Dataset 1',
              backgroundColor: colors.infoLight,
              borderWidth: 1,
              data: Object.keys(output).map(index => output[index].GAV),
            }
            ],
          };

          var output =
            _(data)
              .groupBy('AssetClass2')
              .map((objs, key) => ({
                'AssetClass2': key,
                'GAV': _.sumBy(objs, 'GAV') / 1000000
              }))
              .value();

          this.A2 = {
            labels: Object.keys(output).map(index => output[index].AssetClass2),
            datasets: [{
              // label: 'Dataset 1',
              backgroundColor: colors.infoLight,
              borderWidth: 1,
              data: Object.keys(output).map(index => output[index].GAV),
            }
            ],
          };

          var output =
            _(data)
              .groupBy('Style')
              .map((objs, key) => ({
                'Style': key,
                'GAV': _.sumBy(objs, 'GAV') / 1000000
              }))
              .value();

          this.A3 = {
            labels: Object.keys(output).map(index => output[index].Style),
            datasets: [{
              // label: 'Dataset 1',
              backgroundColor: colors.infoLight,
              borderWidth: 1,
              data: Object.keys(output).map(index => output[index].GAV),
            }
            ],
          };


          var output =
            _(data)
              .groupBy('Structure')
              .map((objs, key) => ({
                'Structure': key,
                'GAV': _.sumBy(objs, 'GAV') / 1000000
              }))
              .value();

          this.A4 = {
            labels: Object.keys(output).map(index => output[index].Structure),
            datasets: [{
              // label: 'Dataset 1',
              backgroundColor: colors.infoLight,
              borderWidth: 1,
              data: Object.keys(output).map(index => output[index].GAV),
            }
            ],
          };



        });
    

      this.A1options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          display: false,
          position: 'right',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
