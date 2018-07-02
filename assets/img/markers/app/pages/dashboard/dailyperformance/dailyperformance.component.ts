import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { FetchDataEditService2 } from '../../../@core/data/edit.service2';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'ngx-dailyperformance',
  styleUrls: ['./dailyperformance.component.scss'],
  templateUrl: './dailyperformance.component.html',
  providers: [FetchDataEditService2]

})


export class DailyPerformanceComponent implements OnDestroy {

  // public gridData: any[] = [
  //   { "AnnInception": 0.0713048563873757, "AnnInceptionBM": 0.0801175090232717, "CumInception": 0.619539390782345, "CumInceptionBM": 0.715129999289485, "IndexCode": "BAR_GLAC", "Month1": 0.00346481422632117, "Month3": 0.0138411120466226, "Month6": -0.0143389359058704, "MonthBM1": 0.00848139034314266, "MonthBM3": 0.0250475451764649, "MonthBM6": 8.40058055152193E-4, "PortfolioCode": "Omega Global Corp Bonds", "YTD": 0.00984510245506431, "YTDBM": 0.0148129572758853, "Year1": 0.0477120006882341, "YearBM1": 0.0723731027618804, "Years10": 0, "Years2": 0.0397307662117925, "Years3": 0.0537537746926988, "Years5": 0.0600389137679822, "YearsBM10": 0, "YearsBM2": 0.0446096361901867, "YearsBM3": 0.0616978372095849, "YearsBM5": 0.0676143371724054 },
  //   {  "AnnInception": 0.0530989010462024, "AnnInceptionBM": 0.0502795641911726, "CumInception": 0.328698605626893, "CumInceptionBM": 0.309275707501808, "IndexCode": "ACMPALL", "Month1": -0.00178303908231259, "Month3": 0.00800207530975627, "Month6": -0.0175185845715957, "MonthBM1": -0.00266644940208893, "MonthBM3": 0.00580779608889759, "MonthBM6": -0.0211462582833283, "PortfolioCode": "Omega Aus Bonds", "YTD": 0.00614572284324355, "YTDBM": 0.0044875749820783, "Year1": 0.026949257507203, "YearBM1": 0.0189477322359313, "Years10": 0, "Years2": 0.0297038814131212, "Years3": 0.0520428883120783, "Years5": 0.0531638252283324, "YearsBM10": 0, "YearsBM2": 0.0240805854174349, "YearsBM3": 0.0489282529227248, "YearsBM5": 0.0504499331944004 },
  //   { "AnnInception": 0.0296878626115464, "AnnInceptionBM": 0.0265932794136587, "CumInception": 0.168893029724394, "CumInceptionBM": 0.15027575475372, "IndexCode": "BM_G005", "Month1": 0.00119700014772839, "Month3": 0.00483826192683856, "Month6": 0.0096483638876248, "MonthBM1": 8.63371633261334E-4, "MonthBM3": 0.00345794266013177, "MonthBM6": 0.00717615820390716, "PortfolioCode": "Omega Aus Cash", "YTD": 0.00363789114852109, "YTDBM": 0.00259233706968653, "Year1": 0.0209918137302709, "YearBM1": 0.0162048699024209, "Years10": 0, "Years2": 0.0220776778576885, "Years3": 0.024119333544552, "Years5": 0.0283770998579804, "YearsBM10": 0, "YearsBM2": 0.0184240469587273, "YearsBM3": 0.020634062653361, "YearsBM5": 0.0252678028511062 },
  //   { "AnnInception": 0.149814311790043, "AnnInceptionBM": 0.141465569872141, "CumInception": 0.900585738557466, "CumInceptionBM": 0.837929951652131, "IndexCode": "BM_G006", "Month1": 0.0184735696967289, "Month3": 0.0561076914433161, "Month6": 0.0399343520801236, "MonthBM1": 0.0227138308642918, "MonthBM3": 0.0505519723295982, "MonthBM6": 0.035984764405639, "PortfolioCode": "Omega Global Listed Infra", "YTD": 0.0342592327910405, "YTDBM": 0.0331274134881965, "Year1": 0.127762909502727, "YearBM1": 0.119653601405858, "Years10": 0, "Years2": 0.104106386223381, "Years3": 0.130671398093448, "Years5": 0, "YearsBM10": 0, "YearsBM2": 0.0994471092265172, "YearsBM3": 0.118197340074473, "YearsBM5": 0 }
  // ]


  currentTheme: string;
  themeSubscription: any;
  gridData: ArrayStore;
  valueDate: Date;

  constructor(private themeService: NbThemeService, private _MasterService: FetchDataEditService2) {

    this.valueDate = this._MasterService.addBusinessDays(new Date(Date.now()), -2)
    const datestring = this._MasterService.dateString(this.valueDate);

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });

    this._MasterService.getRegularNoDB('RLT/getDailyPerformance?valueDate=' + datestring)
      .subscribe((data: any) => {
        this.gridData = new ArrayStore({
          data: data,
          key: 'PortfolioCode',
        });
      });

  }


  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  onContentReady(e) {
    e.component.option("loadPanel.enabled", false);
  }

  LogEdits(value) {

    if (value.rowType === 'data' && value.column.dataField !== 'ValueDate') {
      if (value.value < 0) { value.cellElement.classList.add('redText'); }
      if (value.value > 0) { value.cellElement.classList.add('blackText'); }

    }
  }

  onToolbarPreparing(e) {

    e.toolbarOptions.items.unshift(
    //   {
    //   location: 'before',
    //   template: 'totalGroupCount'
    // }, 
    {
        location: 'before',
        widget: 'dxDateBox',
        options: {
          width: 300,
          type: "date",
          displayFormat: "dd-MMM-yyy",
          value: this.valueDate,
          onValueChanged: this.dateChanged.bind(this)
        }
      },
      // {
      //   location: 'before',
      //   widget: 'dxButton',
      //   options: {
      //     text: 'Request',
      //     icon: 'refresh',
      //     onClick: this.testclick.bind(this),
      //   }
      // }
    );
  }

  dateChanged(e) {
    this.valueDate = e.value
    this.testclick()
  }

  testclick() {
    this._MasterService.getRegularNoDB('RLT/getDailyPerformance?valueDate=' + this._MasterService.dateString(this.valueDate))
      .subscribe((data: any) => {
        this.gridData = new ArrayStore({
          data: data,
          key: 'PortfolioCode',
        });
      });
  }


}




  