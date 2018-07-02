import { Component } from '@angular/core';
import { BaseTradeComponent } from '../../../@core/base/base.trade.component';
import { FetchDataEditService2 } from '../../../@core/data/edit.service2';

@Component({
  selector: 'ngx-trade',
  templateUrl: '../../../@core/base/base.trade.component.html',
  providers: [FetchDataEditService2],
})
export class TradeComponent extends BaseTradeComponent {
  type = "Bond";
  cardheader = "Bond Trade";
  key = "bond-trade";
  url = 'Theodore/bondtrade';
  extraurl = '/bondtrade';

  columns = [{
    dataField: "djangoid",
    caption: "TradeID",
    dataType: "string",
    editable: false,
  }, {
    dataField: "isin",
    dataType: "string",
  }, {
    dataField: "tradedate",
    dataType: "date",
    caption: "Trade Date",
    format: "dd-MMM-yyyy"
  }, {
    dataField: "settledate",
    dataType: "date",
    caption: "Settle Date",
    format: "dd-MMM-yyyy"
  }, {
    dataField: "price",
    dataType: "number",
  }, {
    dataField: "brokercode",
    dataType: "string",
  },{
    dataField: "transactioncode",
    dataType: "string",
  },{
    dataField: "portfoliocode",
    dataType: "string",
  },{
    dataField: "quantity",
    dataType: "string",
  },{
    dataField: "yieldfield",
    dataType: "string",
  },{
    dataField: "accruedinterest",
    dataType: "string",
  },{
    dataField: "settleamount",
    dataType: "string",
  },{
    dataField: "status",
    dataType: "string",
  },{
    dataField: "audittrail",
    dataType: "string",
  },{
    dataField: "bondorderid",
    dataType: "string",
  },{
    dataField: "omgeostatus",
    dataType: "string",
  },{
    dataField: "omgeoresponse",
    dataType: "string",
  },{
    dataField: "sequence",
    dataType: "number",
  }
  ]
}
