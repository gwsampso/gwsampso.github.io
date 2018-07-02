
import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { FetchDataEditService2 } from '../@core/data/edit.service2';

import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { DxTemplateModule,  DxSelectBoxModule} from 'devextreme-angular';

@Component({
    selector: 'portfolio-code-selector',
    template: `<dx-select-box [dataSource]="products" [(selectedItem)]="myPortfolioCode" width="300px" [value]="1" placeholder="Select Portfolio Code" showClearButton="true"
    displayExpr="text" valueExpr="value"
     (onValueChanged)="select.emit(myPortfolioCode)"
    >
    <div *dxTemplate="let data of 'item'" class="custom-item">
      <div class='product-name'>{{data.value}} - {{data.text}}</div>
    </div>
  </dx-select-box>`,
providers: [FetchDataEditService2],
})
export class PortfolioCodeSelector {

    products: any[];
    data2: any;
    myPortfolioCode: any; 

    constructor(private _MasterService: FetchDataEditService2) {

        this._MasterService.getRegular('Theodore/portfolio')
        .subscribe((data:any) => {
            this.products = data;
            this.data2 = new ArrayStore({
              data: this.products,
              key: "value"
            })
        })
    }

    @Output() select = new EventEmitter();

}