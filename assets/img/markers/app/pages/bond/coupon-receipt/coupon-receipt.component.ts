import { Component, OnInit } from '@angular/core';
import { BaseCashComponent } from '../../../@core/base/base.cash.component';
import { FetchDataEditService2 } from '../../../@core/data/edit.service2';

@Component({
  selector: 'ngx-receipt',
  providers: [FetchDataEditService2],
  templateUrl: '../../../@core/base/base.cash.component.html',
})
export class CouponReceiptComponent extends BaseCashComponent {
  extraurl = "/bondcouponreceipt";
  cardheader = "Coupon Receipt";
  key = "coupon-receipt";
  url ='Theodore/bondcouponreceipt';

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
      dataSource: this.currencies,
      valueExpr: 'code',
      displayExpr: 'code'
    },
  }, {
    dataField: "isin",
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
    dataField: "couponrate",
    dataType: "number",
    format: "#,##0.##"
  },
  {
    dataField: "couponfrequency",
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
    
    return (e.holding * e.factor * e.couponrate) / e.couponfrequency;
  }

}
