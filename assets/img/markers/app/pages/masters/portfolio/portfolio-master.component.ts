import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { PortfolioMaster } from '../../../@core/utils/theodore-interfaces'
import { FetchDataEditService2 } from '../../../@core/data/edit.service2';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';

import { currencies } from '../../../@core/data/currencies';
import { countries } from '../../../@core/data/countries';

@Component({
  selector: 'ngx-portfolio-master',
  templateUrl: './portfolio-master.component.html',
  providers: [FetchDataEditService2],
})
export class PortfolioMasterComponent {
  dataSourcePortfolioMaster: any = {};
  editing = {};
  private url: string = 'Theodore/portfoliomaster';
  private portfoliocode: string = '';
  private ValueDate: Date;
  public currencies: any[] = currencies;
  public countries: any[] = countries;
  constructor(private _MasterService: FetchDataEditService2) {
    this.editing = this._MasterService.editObject(this.url);
  }

  Initalize() {   

    var myStore = this._MasterService.createStore(this.url)

    this.dataSourcePortfolioMaster = new DataSource({
      store: myStore
    });

    this.currencies = currencies;
    this.countries = countries;
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
        widget: 'dxButton',
        options: {
          text: 'Request',
          icon: 'refresh',
          onClick: this.Initalize.bind(this),
        }
      });
  }
}