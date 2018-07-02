import { Component, OnInit, Input } from '@angular/core';

import { PortfolioList } from '../../../../interfaces/portfolio.interface';
import { FXTrade, FXTradeList } from '../../../../interfaces/fxtrade.interface';

import { Subscription } from 'rxjs';

import { Observable } from 'rxjs/Observable';

import { FetchDataEditService2 } from '../../../@core/data/edit.service2';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import notify from 'devextreme/ui/notify';


@Component({
    selector: 'ngx-CACSEntry',
    templateUrl: './CACSEntry.html',
    providers: [FetchDataEditService2],
})


export class CACSEntryComponent implements OnInit {

    dataSourceActions = [];
    dataSourceTrades = [];
    dataSourcePositions = [];
    securitytypes: any[];
    selectedRows: string[];
    defaultVisible: boolean;

    constructor(private _MasterService: FetchDataEditService2) {
        this.securitytypes = [{
            name: 'EQUITY',
            code: 'EQUITY'
        },
        {
            name: 'BOND',
            code: 'BOND'
        }
        ];
    }

    ngOnInit() {
        this.Initalize();
    }

    toggleDefault() {
        this.defaultVisible = !this.defaultVisible;
    }

    Initalize() {
        this.dataSourceActions = [];
        this.dataSourceTrades = [];
    }

    onEditorPreparing(e) {
        if (e.parentType === "dataRow" && e.dataField === "Qantity" && e.editorOptions.value !== "") {
            e.editorOptions.disabled = false;
        }
        else
        {
            e.editorOptions.disabled = true;

        }
    }


    resetForm() {
        // do nothing
        }

    sendTrades() {
        // do nothing
        }


    createOrders() {

        if (this.selectedRows === undefined) {
            notify({
                message: "No Master Security Selected, please select the row which is the master security",
                position: {
                    my: "center top",
                    at: "center top"
                }
            }, "error", 3000);
            
        } else {
            var index = this.dataSourceActions.findIndex(x => x.Identifier == this.selectedRows);

            var masterObjectQuery = 'securityType=' + this.dataSourceActions[index].SecurityType +
                '&identifier=' + this.selectedRows[0];
            //do the python call to get positions accross the portfolios
            this._MasterService.getRegularNoDB('RLT/getSecurityPositions?' + masterObjectQuery)
                .subscribe((data: any) => {
                    this.dataSourcePositions = data.results
                    this.dataSourcePositions.forEach((item, index) => {
                        this.createActions(item.portfoliocode, item.qty)
                    })
                });            
        }

      
    }

    createActions(pc: any, qty: any) {

        this.dataSourceActions.forEach((item, index) => {
            this.dataSourceTrades.push({
                PortfolioCode: pc,
                SecurityType: item.SecurityType,
                Identifier: item.Identifier,
                TradeDate: item.TradeDate,
                SettleDate: item.SettleDate,
                Qantity: item.Ratio * qty,
                Price: item.Price
            })
        })
    }
}
