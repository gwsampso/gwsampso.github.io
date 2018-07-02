import  ArrayStore from 'devextreme/data/array_store';
import { Component, OnInit, Input } from '@angular/core';

import { PortfolioList } from '../../../../interfaces/portfolio.interface';
import { CashforecastService } from './cash.service';
import { FxTradeService } from './fxtrade.service';
import { FXTrade, FXTradeList } from '../../../../interfaces/fxtrade.interface';

import { Subscription } from 'rxjs';

import { Observable } from 'rxjs/Observable';

import { FetchDataEditService2 } from '../../../@core/data/edit.service2';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';


@Component({
    selector: 'ngx-fxplanner',
    templateUrl: './fxPlanner.html',
    styleUrls: ['./fxPlanner.css'],
    providers: [CashforecastService, FetchDataEditService2, FxTradeService],
})


export class fxPlannerComponent implements OnInit {

    public cash: any[];
    private colWidthTable: number;
    public cash2: any[];
    public cols = [];
    public customcols = [];
    public customcols2 = [];
    public editing = {};
    public CellRow: number;
    public CellCol: number;
    public start: number;
    public end: number;
    public changeinvalue: number;
    public keyDataField: string;
    otherkeyDataField: string;
    othersettleAmount: number;
    myValueDate: Date;
    myPortfolioCode: any; 
    fxTradeList: FXTradeList[];
    fxTrade: FXTrade;
    data: any;
    loadingVisible = false;
    products: any[];
    data2: any;

    constructor(private _CashService: CashforecastService, private _FxTradeService: FxTradeService, 
        private _MasterService: FetchDataEditService2) {

        this.editing = {
            allowUpdating: true,
            mode: 'cell',
            allowAdding: false,
            allowDeleting: false,
        };

        this.myValueDate = new Date(Date.now());

        this._MasterService.getRegular('Theodore/portfoliolist')
            .subscribe((data:any) => {
                this.products = data.results;
                this.data2 = new ArrayStore({
                  data: this.products,
                  key: "value"

                })
            })

    }

    ngOnInit() {

        this.Initalize();
    }

    Initalize() {
        this.cash = [];
        this.cols = [];
        this.cash2 = [];
        this.customcols = [];
        this.customcols2 = [];
        this.fxTradeList = [];
    }

    onToolbarPreparing(e) {

        var portStore = this._MasterService.createStore('Theodore/portfoliolist')


        var portlist = new DataSource({
            store: portStore,
            key: 'value'
        });

        e.toolbarOptions.items.unshift(
            {
            location: 'before',
            template: 'totalGroupCount'
        },
        // {
        //     location: 'before',
        //     widget: 'dxSelectBox',
        //     // template: 'totalGroupCount',
        //     options: {
        //         width: 300,
        //         placeholder: 'Select Portfolio Code',
        //         displayExpr: "text",
        //         valueExpr: "value",
        //         dataSource: portlist,
        //         onValueChanged: this.portfolioChanged.bind(this)
        //     }
        // },
         {
                location: 'before',
                widget: 'dxDateBox',
                options: {
                    width: 300,
                    type: "date",
                    displayFormat: "dd-MMM-yyy",
                    value: this.myValueDate,
                    onValueChanged: this.dateChanged.bind(this)
                }
            },
            {
                location: 'before',
                widget: 'dxButton',
                options: {
                    text: 'Request',
                    icon: 'refresh',
                    onClick: this.testclick.bind(this),
                }
            },
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    text: 'Send Trades',
                    icon: 'upload',
                    onClick: this.sendTrades.bind(this),
                }
            });
    }

    portfolioChanged(e) {
        // console.log(e)
        this.myPortfolioCode.value = e.value    
    }

    dateChanged(e) {
        this.myValueDate = e.value
    }

    sendTrades(e) {
        console.log(e)
    }

    onContentReady(e) {
        // e.component.option("loadPanel.enabled", false);
    }

    testclick() {

    this.Initalize();
    
    this.loadingVisible = true;

    const datestring = this.DateString(this.myValueDate);

    this._CashService.fetchCashForecast(this.myPortfolioCode.value, datestring)
            .subscribe((data: any[]) => {
                this.cash = data;
                this.cash2 = JSON.parse(JSON.stringify(data));
                this.cols = Object.keys(data[0]);
                this.cols.forEach((item, index) => {
                    if (item === 'ValueDate') {
                        this.customcols.push({
                            dataField: item,
                            dataType: 'date',
                            format: 'dd/MM/yyyy',
                            allowEditing: false,
                            fixed: true,
                            width: '90px',
                        });
                        this.customcols2.push({
                            dataField: item,
                            dataType: 'date',
                            format: 'dd/MM/yyyy',
                            allowEditing: false,
                            fixed: true,
                            width: '90px',
                        });
                    }
                    else {
                        this.customcols.push({
                            dataField: item,
                            dataType: 'number',
                            format: {
                                // tslint:disable-next-line:object-literal-shorthand
                                formatter: function (originalValue) {
                                    return originalValue.toLocaleString('en-US', { minimumFractionDigits: 2 });
                                },
                            },
                        });
                        this.customcols2.push({
                            dataField: item,
                            dataType: 'number',
                            format: {
                                formatter: function (originalValue) {
                                    return originalValue.toLocaleString('en-US', { minimumFractionDigits: 2 });
                                },
                            },
                        });
                    }
                });
                this.loadingVisible = false;
            });

    }

    DateString(dateme: Date) {
        let d = new Date(dateme),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    onRowUpdating(value) {
    var tradeDate = value.key["ValueDate"];
    this.changeinvalue = value.newData[this.keyDataField] - this.start;

        this._FxTradeService.fetchFXTrade(this.myPortfolioCode.value, this.DateString(tradeDate),
            this.keyDataField, this.changeinvalue)
                .subscribe((data: any) => {
                    this.fxTrade = data;
                    this.otherkeyDataField = this.fxTrade.settleCCY;
                    this.othersettleAmount = this.fxTrade.settleAmount;

                    this.CreateTrade(this.fxTrade);
                    this.cash2[this.CellRow][this.otherkeyDataField] -= (this.othersettleAmount);

                    for (let i = this.CellRow + 1; i < this.cash2.length; i++) {
                        this.cash2[i][this.keyDataField] += this.changeinvalue;
                        this.cash2[i][this.otherkeyDataField] -= (this.othersettleAmount);
                    }
                });
        }
        

    EditCell(e) {
        this.start = 0;
        this.end = 0;
        this.keyDataField = e.dataField;
        this.start = e.value;
        this.CellRow = e.row.rowIndex;
        this.CellCol = e.index;
    }

    LogEdits(value) {

        if (value.rowType === 'data' && value.column.dataField !== 'ValueDate') {
            if (value.value < 0) { value.cellElement.classList.add('red'); }
            if (value.value > 0) { value.cellElement.classList.add('green'); }

        }

    }

    CreateTrade(trade: FXTrade) {
        this.fxTradeList.push({
            Type: this.fxTrade.Type,
            Side: this.fxTrade.Side,
            GivenCCY: this.keyDataField,
            GivenAmount: Math.abs(this.changeinvalue),
            SettleCCY: this.fxTrade.settleCCY,
            SettleAmount: Math.abs(this.fxTrade.settleAmount),
            ValueDate: this.cash2[this.CellRow].ValueDate,
            HedgeDate: this.fxTrade.HedgeDate,
            PortfolioCode: this.myPortfolioCode.value,
        });
    }





}
