import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from './log-interface';
import { FetchDataEditService2 } from '../../../@core/data/edit.service2';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';


@Component({
  selector: 'ngx-log',
  templateUrl: './log.component.html',
    providers: [FetchDataEditService2],
})
export class LogComponent {
  dataSourceLog: any = {};
  editing = {};
  private url: string = 'SeniorSandpit/Log';

  constructor(private _MasterService: FetchDataEditService2) {
	var myStore = this._MasterService.createStore(this.url)

    this.dataSourceLog = new DataSource({
      store: myStore
    });
  }

}