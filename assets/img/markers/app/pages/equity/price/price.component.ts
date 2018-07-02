import { Component } from '@angular/core';
import { BasePriceComponent } from '../../../@core/base/base.price.component';
import { FetchDataEditService2 } from '../../../@core/data/edit.service2';

@Component({
  selector: 'ngx-price',
  templateUrl: '../../../@core/base/base.price.component.html',
  providers: [FetchDataEditService2],
})
export class PriceComponent extends BasePriceComponent {
  cardheader = "Equity Price";
  key = "equity-price";
  extraurl = "/equityprice";
  url = 'Theodore/equityprice';

  columns = [{
    dataField: "sedol",
    dataType: "string",
    validationRules: [{ type: "required", message:"Sedol is required"}]
  }, {
    dataField: "valuedate",
    dataType: "date",
    caption: "Value Date",
    format: "dd-MMM-yyyy"
  }, {
    dataField: "price",
    dataType: "number",
    format: "#,##0.##"
  }
  ]
}

