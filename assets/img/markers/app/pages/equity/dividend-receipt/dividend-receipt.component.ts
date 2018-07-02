  
import { Component, OnInit } from '@angular/core';
import { BaseCashComponent } from '../../../@core/base/base.cash.component';
import { FetchDataEditService2 } from '../../../@core/data/edit.service2';

@Component({
  selector: 'ngx-receipt',
  providers: [FetchDataEditService2],
  templateUrl: '../../../@core/base/base.cash.component.html',
})

export class DividendReceiptComponent extends BaseCashComponent {
  cardheader = "Equity Dividend Receipt";
  key = "equity-dividend-receipt";
  url = 'Theodore/equitydividendreceipt';
  extraurl = "/equitydividendreceipt";

  columns = [{
    dataField: "portfoliocode",
    dataType: "string",
    lookup: {
      dataSource: this.getPortfoliolist(),
      valueExpr: 'value',
      displayExpr: 'value'
    },
    validationRules: [{ type: "required", message:"Portfolio Code is required"}]
  }, {
    dataField: "date",
    dataType: "date",
    format: "dd-MMM-yyyy"
  }, {
    dataField: "currency",
    dataType: "string",
    lookup: {
      dataSource: this.equitycurrencies,
      valueExpr: 'code',
      displayExpr: 'code'
    },
  }, {
    dataField: "sedol",
    dataType: "string",
  }, {
    dataField: "holding",
    dataType: "number",
    format: "#,##0.##"
  },{
    dataField: "factor",
    dataType: "number",
    format: "#,##0.##"
  },
  {
    dataField: "dividendrate",
    dataType: "number",
    format: "#,##0.##"
  },
   {
    caption: "Amount",
    calculateCellValue: this.calculate,
    dataType: "number",
    format: "#,##0.##"
  },
  ]

  calculate(e) {
    if(!e.holding || !e.factor)
        return null;
    
    return e.holding * e.factor * e.dividendrate;
  }

}