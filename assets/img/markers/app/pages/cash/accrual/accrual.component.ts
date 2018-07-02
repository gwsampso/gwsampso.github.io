  import { Component, OnInit } from '@angular/core';
  import { BaseCashComponent } from '../../../@core/base/base.cash.component';
  import { FetchDataEditService2 } from '../../../@core/data/edit.service2';
  
  @Component({
    selector: 'ngx-flow',
    providers: [FetchDataEditService2],
    templateUrl: '../../../@core/base/base.cash.component.html',
  })
  export class CashAccrualComponent extends BaseCashComponent {
    url = 'Theodore/cashaccrual';
    extraurl = "/cashaccrual";
    cardheader = "Cash Accrual";
    key = "cash-accrual";
  
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
      dataField: "ccy",
      dataType: "string",
      lookup: {
        dataSource: this.currencies,
        valueExpr: 'code',
        displayExpr: 'code'
      },
    }, {
      dataField: "value",
      dataType: "number",
      format: "#,##0.##"
    }, {
      dataField: "comment",
      dataType: "string"
    },
    ]
  
  }