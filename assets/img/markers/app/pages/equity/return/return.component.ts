import { Component } from '@angular/core';
import { BasePriceComponent } from '../../../@core/base/base.price.component';
import { FetchDataEditService2 } from '../../../@core/data/edit.service2';
  
  @Component({
    selector: 'ngx-return',
    templateUrl: '../../../@core/base/base.price.component.html',
    providers: [FetchDataEditService2],
  })
  export class ReturnComponent extends BasePriceComponent {
    cardheader = "Equity Return";
    key = "equity-return";
    url ='Theodore/equityreturn';
    extraurl = "/equityreturn";

    columns = [
        {
        dataField: "sedol",
        dataType: "string",
        validationRules: [{ type: "required", message:"Sedol is required"}]
      }, {
        dataField: "valuedate",
        dataType: "date",
        caption: "Value Date",
        format: "dd-MMM-yyyy"
      }, {
        dataField: "returngross",
        dataType: "number",
        format:"#0.00%"
      }, {
        dataField: "returnnet",
        dataType: "number",
        format:"#0.00%"
      }, {
        dataField: "returndeclared",
        dataType: "number",
        format:"#0.00%"
      }, {
        dataField: "returnprice",
        dataType: "number",
        format:"#0.00%"
      }, {
        dataField: "returnincome",
        dataType: "number",
        format:"#0.00%"
      }, {
        dataField: "returngrosslog",
        dataType: "number",
        format:"#0.00%"
      }, {
        dataField: "returnnetlog",
        dataType: "number",
        format:"#0.00%"
      }, {
        dataField: "returndeclaredlog",
        dataType: "number",
        format:"#0.00%"
      }, {
        dataField: "returnpricelog",
        dataType: "number",
        format:"#0.00%"
      }, {
        dataField: "returnincomelog",
        dataType: "number",
        format:"#0.00%"
      }, {
        dataField: "dividendgross",
        dataType: "number",
        format:"#0.00%"
      }, {
        dataField: "dividendnet",
        dataType: "number",
      },{
        dataField: "dividenddeclared",
        dataType: "number",
      },{
        dataField: "dividendcurrency",
        dataType: "number",
      },{
        dataField: "frankinglevel",
        dataType: "number",
      },
    ]
  }