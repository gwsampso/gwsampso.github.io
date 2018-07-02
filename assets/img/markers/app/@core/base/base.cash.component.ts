import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { FetchDataEditService2 } from '../data/edit.service2';

import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

import { currencies } from '../data/currencies';
import { equitycurrencies } from '../data/equity.currencies';
import { accounts } from '../data/accounts';

@Component({
  selector: 'ngx-baseflow',
  templateUrl: './base.cash.component.html',
  providers: [FetchDataEditService2],
})
export class BaseCashComponent {
  editing = {};
  dataSourceRefRatePrice: any = {};
  url: string = '';
  extraurl: string = '';
  currencies: any[] = currencies;
  equitycurrencies: any[] = equitycurrencies;
  accounts: any[] = accounts;
  portfolios: any;
  myportfolios:any;
  myPortfolioCode: any = {};
  tasks: DataSource;
  columns = [];
  cardheader:  string = '';
  key: string = '';
  countries: Observable<Object[]>;

  constructor(public _MasterService: FetchDataEditService2) {

    this.editing = this._MasterService.editObjectTest();
  
}


  Initalize() { 
   

    if (this.myPortfolioCode == null) {
      var myStore = this._MasterService.createStore(this.url)
      this.dataSourceRefRatePrice = new DataSource({
        store: myStore
      });
    }
    else {
      if (this.myPortfolioCode.value == undefined) {
        var myStore = this._MasterService.createStore(this.url)
        this.dataSourceRefRatePrice = new DataSource({
          store: myStore
        });
      }
      else {
        var myStore = this._MasterService.createStore('Theodore/portfolio/' + this.myPortfolioCode.value + this.extraurl)
        this.dataSourceRefRatePrice = new DataSource({
          store: myStore
        });
      }
    }

  }

  
  getPortfoliolist() {
    return {
         loadMode: "raw",
         key: 'value',
         load: (loadOptions)=>{
              return this._MasterService.getRegular('Theodore/portfoliolist').toPromise().then((r)=>{
                      return r;
              })
          }
    };

}


  addNew(e) {
    e.data.portfoliocode = this.myPortfolioCode.value
  }

  onContentReady(e) {
    this._MasterService.onContentReady(e);
  }

  onCellPrepared(e) {
    this._MasterService.onCellPrepared(e);
  }

  onToolbarPreparing(e) {

    e.toolbarOptions.items.unshift(
      {
        location: 'before',
        template: 'totalGroupCount'
      },
      {
        location: 'before',
        widget: 'dxButton',
        options: {
          text: 'Request',
          icon: 'refresh',
          onClick: this.Initalize.bind(this),
        }
      });
  }
}