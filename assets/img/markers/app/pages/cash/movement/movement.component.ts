import { Component, OnInit } from '@angular/core';
import { BaseCashComponent } from '../../../@core/base/base.cash.component';
import { FetchDataEditService2 } from '../../../@core/data/edit.service2';

@Component({
  selector: 'ngx-flow',
  providers: [FetchDataEditService2],
  templateUrl: '../../../@core/base/base.cash.component.html',
})

  export class CashMovementComponent extends BaseCashComponent {
    url = 'Theodore/cashmovement';
    extraurl = "/cashmovement";
    cardheader = "Cash Movement";
    key = "cash-movement";
  
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
      dataField: "ccyo",
      caption: "CCY Out",
      dataType: "string",
      lookup: {
        dataSource: this.currencies,
        valueExpr: 'code',
        displayExpr: 'code'
      },
    },{
      dataField: "accounto",
      caption: "Account Out",
      dataType: "string",
      lookup: {
        dataSource: this.accounts,
        valueExpr: 'code',
        displayExpr: 'name'
      },
    },  {
      dataField: "valueo",
      caption: "Value Out",
      dataType: "number",
      format: "#,##0.##"
    },{
      dataField: "ccyi",
      caption: "CCY In",
      dataType: "string",
      lookup: {
        dataSource: this.currencies,
        valueExpr: 'code',
        displayExpr: 'code'
      },
    },{
      dataField: "accounti",
      caption: "Account In",
      dataType: "string",
      lookup: {
        dataSource: this.accounts,
        valueExpr: 'code',
        displayExpr: 'name'
      },
    },  {
      dataField: "valuei",
      caption: "Value In",
      dataType: "number",
      format: "#,##0.##"
    }, {
      dataField: "comment",
      dataType: "string"
    },
    ]
  
  }