import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FetchDataEditService2 } from '../data/edit.service2';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'ngx-baseprice',
  templateUrl: './base.price.component.html',
  providers: [FetchDataEditService2],
})
export class BasePriceComponent {
  editing = {};
  dataSource: any = {};
  url: string = '';
  extraurl: string = '';
  cardheader:  string = '';
  key: string = '';
  private ValueDate: Date;
  private SEDOL = '';
  columns = [];
  constructor(private _MasterService: FetchDataEditService2) {
    this.editing = this._MasterService.editObject(this.url);
  }
    
  Initalize() { 

    if (this.SEDOL == '' && this.ValueDate == undefined ) {
      var myStore = this._MasterService.createStore(this.url)
      this.dataSource = new DataSource({
        store: myStore
      });
    }
    else if (this.SEDOL != '' && this.ValueDate == null) {
        var myStore = this._MasterService.createStore('Theodore/sedol/' + this.SEDOL + this.extraurl)
        this.dataSource = new DataSource({
          store: myStore
        });
      }
    else if (this.SEDOL == '' && this.ValueDate != null) {
      var myStore = this._MasterService.createStore('Theodore/valuedate/' + this._MasterService.dateString(this.ValueDate) + this.extraurl)
      this.dataSource = new DataSource({
        store: myStore
      });
    }
    else {
      //do nothing
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
          value: this.SEDOL,
          icon: 'refresh',
          showClearButton: "true",
          onValueChanged: this.updateSedol.bind(this)
        }
      },
      {
        location: 'before',
        widget: 'dxDateBox',
        options: {
          type: 'date',
          showClearButton: "true",
          value: this.ValueDate,
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
    this.ValueDate = e.value
  }
  updateSedol(e) {
    this.SEDOL = e.value
  }
}