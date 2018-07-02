import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Tab, Longtab, Service } from './app.service';

@Component({
  selector: 'ngx-cashforecast',
  styleUrls: ['./cashforecast.component.scss'],
  templateUrl: './cashforecast.component.html',
  providers: [Service]
})
export class CashforecastComponent implements OnDestroy {

  longtabs: Longtab[];
  tabs: Tab[];
  tabContent: string;;


  public data = {
    0: [{ code: "G006", ccy: "EUR", amount: -6754.78 },
      { code: "G030", ccy: "EUR", amount: -12540.22 },
      { code: "G044", ccy: "KRW", amount: -2419302.6 },
      { code: "G036", ccy: "USD", amount: -61.71 },
      { code: "G040", ccy: "USD", amount: -10500 },
      { code: "G046", ccy: "USD", amount: -5250 },],
    1: [{ code: "G004", ccy: "AUD", amount: -18750 },
      { code: "G032", ccy: "SEK", amount: -7750 },
      { code: "G034", ccy: "SEK", amount: -3875 },
      { code: "G030", ccy: "SGD", amount: -128581.8 },
      { code: "G003", ccy: "USD", amount: -1687.5 },
      { code: "G034", ccy: "USD", amount: -2812.5 },
      { code: "G040", ccy: "USD", amount: -1100000 },
      { code: "G046", ccy: "USD", amount: -700000 },
],
    2: [{ code: "G004", ccy: "AUD", amount: -4500 },
      { code: "G044", ccy: "CZK", amount: -2720034 },
      { code: "G030", ccy: "GBP", amount: -29815.06 },
      { code: "G034", ccy: "GBP", amount: -2125 },
      { code: "G040", ccy: "GBP", amount: -21250 },
      { code: "G046", ccy: "GBP", amount: -17000 },
      { code: "G030", ccy: "USD", amount: -40552.92 },
      { code: "G032", ccy: "USD", amount: -5000 },
      { code: "G035", ccy: "USD", amount: -7348.25 },
      { code: "G036", ccy: "USD", amount: -4457.05 },
      { code: "G040", ccy: "USD", amount: -10000 },
],
    3: [{ code: "G006", ccy: "CAD", amount: -4048.26 },
      { code: "G034", ccy: "EUR", amount: -16500 },
      { code: "G003", ccy: "GBP", amount: -5000 },
      { code: "G030", ccy: "USD", amount: -26471.13 },
      { code: "G036", ccy: "USD", amount: -1935.51 },
      { code: "G005", ccy: "AUD", amount: -10000000 },
      { code: "G006", ccy: "CHF", amount: -3110.25 },
      { code: "G044", ccy: "KES", amount: -2469800 },
      { code: "G044", ccy: "PHP", amount: -810216 },
      { code: "G034", ccy: "USD", amount: -1375 },
      { code: "G040", ccy: "USD", amount: -10312.5 },
      { code: "G046", ccy: "USD", amount: -6875 },
],
    4: [{ code: "G005", ccy: "AUD", amount: -197812.5 },
      { code: "G030", ccy: "BRL", amount: -183353.93 },
      { code: "G006", ccy: "CAD", amount: -5171.4 },
      { code: "G035", ccy: "EUR", amount: -17534.06 },
      { code: "G030", ccy: "HKD", amount: -1377900 },
      { code: "G030", ccy: "MXN", amount: -55179.61 },
      { code: "G044", ccy: "MXN", amount: -102421.21 },
      { code: "G030", ccy: "SGD", amount: -83116 },
      { code: "G003", ccy: "USD", amount: -3875 },
      { code: "G030", ccy: "USD", amount: -24233.81 },
      { code: "G034", ccy: "USD", amount: -2750 },
      { code: "G036", ccy: "USD", amount: -424.05 },
]
  }

  public gridData: any;

 

  currentTheme: string;
  themeSubscription: any;

  constructor(private service: Service, private themeService: NbThemeService) {
    this.tabs = service.getTabs();
    this.gridData = this.data["0"]

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  selectTab(e) {
    this.gridData = this.data[e.itemIndex]
    
  }

  LogEdits(value) {

    if (value.rowType === 'data' && value.column.dataField !== 'ValueDate') {
      if (value.value < 0) { value.cellElement.classList.add('redText'); }
      if (value.value > 0) { value.cellElement.classList.add('blackText'); }

    }
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
