import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FetchDataEditService2 } from '../data/edit.service2';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'ngx-basetrade',
  templateUrl: './base.trade.component.html',
  providers: [FetchDataEditService2],
})
export class BaseTradeComponent {
  editing = {};
  dataSource: any = {};
  url: string = '';
  extraurl: string = '';
  cardheader:  string = '';
  key: string = '';
  private TradeDate: Date;
  private Identifier = '';
  private ISIN = '';
  columns = [];
  type: string = '';
  constructor(private _MasterService: FetchDataEditService2) {
    this.editing = this._MasterService.editObject(this.url);
  }
    
  Initalize() { 

    if (this.type =="Bond") {

      if (this.Identifier == '' && this.TradeDate == undefined ) {
        var myStore = this._MasterService.createStore(this.url)
        this.dataSource = new DataSource({
          store: myStore
        });
      }
      else if (this.Identifier != '' && this.TradeDate == null) {
          var myStore = this._MasterService.createStore('Theodore/isin/' + this.Identifier + this.extraurl)
          this.dataSource = new DataSource({
            store: myStore
          });
        }
      else if (this.Identifier == '' && this.TradeDate != null) {
        var myStore = this._MasterService.createStore('Theodore/tradedate/' + this._MasterService.dateString(this.TradeDate) + this.extraurl)
        this.dataSource = new DataSource({
          store: myStore
        });
      }
      else {
        //do nothing
        }
      
    } else if (this.type=="Equity") {

      if (this.Identifier == '' && this.TradeDate == undefined ) {
        var myStore = this._MasterService.createStore(this.url)
        this.dataSource = new DataSource({
          store: myStore
        });
      }
      else if (this.Identifier != '' && this.TradeDate == null) {
          var myStore = this._MasterService.createStore('Theodore/sedol/' + this.Identifier + this.extraurl)
          this.dataSource = new DataSource({
            store: myStore
          });
        }
      else if (this.Identifier == '' && this.TradeDate != null) {
        var myStore = this._MasterService.createStore('Theodore/tradedate/' + this._MasterService.dateString(this.TradeDate) + this.extraurl)
        this.dataSource = new DataSource({
          store: myStore
        });
      }
      else {
        //do nothing
        }
      
    } else {
      // do nothiong
    }
   

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
        widget: 'dxTextBox',
        options: {
          type: 'text',
          value: this.Identifier,
          placecardholder: this.type,
          icon: 'refresh',
          showClearButton: "true",
          onValueChanged: this.updateIdentifier.bind(this)
        }
      },
      {
        location: 'before',
        widget: 'dxDateBox',
        options: {
          type: 'date',
          showClearButton: "true",
          value: this.TradeDate,
          icon: 'refresh',
          displayFormat: "dd-MMM-yyyy",
          onValueChanged: this.updateDate.bind(this)
        }
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
  updateDate(e) {
    this.TradeDate = e.value
  }
  updateIdentifier(e) {
    this.Identifier = e.value
  }
}