import { clients } from './../../../@core/data/clients';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { Observable } from 'rxjs/Observable';

import { FetchDataEditService2 } from '../../../@core/data/edit.service2';
import ArrayStore from 'devextreme/data/array_store';
import notify from 'devextreme/ui/notify';
import * as moment from 'moment';

@Component({
    selector: 'ngx-ApplicationRedemption',
    templateUrl: './ApplicationRedemption.html',
    providers: [FetchDataEditService2],
})


export class ApplicationRedemptionComponent implements OnInit {
    public flowtypes: string[];
    public flowtype: string;
    public currencies: string[];
    public currency: string;
    public accounts: string[];
    public account: string;
    public clients: any[];
    public client: string;
    public portfoliocodes: string[];
    public portfoliocode: string;
    settleDate = new Date();
    tradeDate = new Date();
    source: ArrayStore;
    public employee: Employee;
    public Holidays: any[];
    public ourHolidays = [];

    PortfolioCodeDisabled: boolean = true
    ClientDisabled: boolean = true

    constructor(private _MasterService: FetchDataEditService2) {

        this.tradeDate = this._MasterService.addBusinessDays(new Date(Date.now()), 0)

        this._MasterService.getRegular('Theodore/portfolio')
            .subscribe((data: any) => {
                this.source = new ArrayStore({
                    data: data.results,
                    key: 'value',
                });
            });

        this._MasterService.getHolidays('')
            .subscribe((data: any) => {
                this.Holidays = data.result.records
                this.Holidays.forEach((item, index) => {
                    if (item['Applicable To'] == 'NAT' || item['Applicable To'] == 'VIC') {
                        var a = moment(item['Date'], "YYYYMMDD").toDate();
                        this.ourHolidays.push(a)
                    }
                });
                this.settleDate = this._MasterService.addBusinessDays(new Date(Date.now()), 2, this.ourHolidays);
            });

        this.flowtypes = [
            "Application",
            "Redemption"
        ];
        this.currencies = [
            "AUD",
            "USD"
        ];
        this.accounts = [
            "CASH",
            "MARGIN"
        ];

        this.clients = clients

        this.employee = {
            FlowType: '',
            PortfolioCode: '',
            Client: '',
            Currency: 'AUD',
            Account: 'CASH',
            Amount: 0,
            TradeDate: this.tradeDate,
            SettleDate: this.settleDate
        }

    }

    ngOnInit() {
    }

    Initalize() {

    }

    form_fieldDataChanged(e) {
        let updatedField = e.dataField;
        let newValue = e.value;

        if (updatedField == 'FlowType') {
            if (newValue == 'Application' || newValue == 'Redemption') {
                this.PortfolioCodeDisabled = false
                this.flowtype = newValue
            }           
        }

        if (updatedField == 'PortfolioCode') {
            if (newValue !== '') {
                this.ClientDisabled = false
            }
        }


        if (updatedField == 'PortfolioCode') {
            if (newValue == 'G005') {
                if (this.employee.FlowType == 'Application') {
                    this.settleDate = this._MasterService.addBusinessDays(this.tradeDate, 1, this.ourHolidays);
                }
                else {
                    if (this.employee.FlowType == 'Redemption') {
                        this.settleDate = this._MasterService.addBusinessDays(this.tradeDate, 1, this.ourHolidays);
                    }
                }
            }
            else {
                if (this.employee.FlowType == 'Application') {
                    this.settleDate = this._MasterService.addBusinessDays(this.tradeDate, 1, this.ourHolidays);
                }
                else {
                    if (this.employee.FlowType == 'Redemption') {
                        this.settleDate = this._MasterService.addBusinessDays(this.tradeDate, 2, this.ourHolidays);
                    }
                }
            }

        }


        if (updatedField == 'FlowType') {
            if (newValue == 'Application') {
                this.settleDate = this._MasterService.addBusinessDays(this.tradeDate, 1, this.ourHolidays);
            }
            else {
                if (newValue == 'Redemption' && this.employee.PortfolioCode == 'G005') {
                    this.settleDate = this._MasterService.addBusinessDays(this.tradeDate, 1, this.ourHolidays);
                }
                else {
                    this.settleDate = this._MasterService.addBusinessDays(this.tradeDate, 2, this.ourHolidays);
                }
            }

        }
    }

    onFormSubmit(e) {

        this._MasterService.postRegular("RLT/insertApplicationRedemption", this.employee)

        notify({
            message: this.employee.FlowType + " submitted for " + this.employee.PortfolioCode,
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);

        e.preventDefault();

        this.resetForm()

    }

    resetForm() {

        this.PortfolioCodeDisabled = true
        this.ClientDisabled = true
        this.flowtype = ''
        this.tradeDate = this._MasterService.addBusinessDays(new Date(Date.now()), 0)
        this.settleDate = this._MasterService.addBusinessDays(new Date(Date.now()), 2, this.ourHolidays)

        this.employee = {
            FlowType: this.flowtype,
            PortfolioCode: '',
            Client: '',
            Currency: 'AUD',
            Account: 'CASH',
            Amount: 0,
            TradeDate: this.tradeDate,
            SettleDate: this.settleDate
        }
    }
}

class Employee {
    FlowType: string;
    PortfolioCode: string;
    Client: string;
    Currency: string;
    Account: string;
    Amount: number;
    TradeDate: Date;
    SettleDate: Date;
}




