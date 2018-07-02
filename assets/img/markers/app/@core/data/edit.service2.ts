import ArrayStore from 'devextreme/data/array_store';

import { Injectable, Inject, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { retry } from 'rxjs/operators/retry';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { PortfolioMaster, PortfolioList } from '../utils/theodore-interfaces'
import { shareReplay, map } from 'rxjs/operators';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import 'rxjs/add/operator/toPromise';

import * as _ from "lodash";

const CACHE_SIZE = 1;


@Injectable()
export class FetchDataEditService2 extends BehaviorSubject<any[]> {
    

    public portfolios: any;
    private data: any[] = [];
   

    constructor(private http: HttpClient) {
        super([]);      
     }

    public API_URL = 'http://192.168.1.179:5671/';
    public API_URL_NO_DATABASE = 'http://192.168.1.179:5671/';


    search() {
        return this.http.get("http://192.168.1.179:5671/Theodore/portfoliolist/")
            .toPromise()
            .then(response => response as any[])
            .catch(this.handleError);
     }   


    createStore(url: string) {
        var myStore = new CustomStore({
            load: (loadOptions: any) => {
                var params = '?';

                console.log(loadOptions)

                var pageSize = loadOptions.take || 10;;

                params += 'page=' + ((loadOptions.skip / loadOptions.take) + 1) || 1;
                params += '&pageSize=' + pageSize;

                if (loadOptions.sort) {
                    params += '&ordering=';
                    if (loadOptions.sort[0].desc) {
                        params += '-'
                        params += loadOptions.sort[0].selector;
                    }
                    else {
                        params += loadOptions.sort[0].selector;
                    }
                }

                var filterString = ""

                if (loadOptions.filter) {
                    if (loadOptions.filter.length = 1) {            
                        filterString = loadOptions.filter.join('')
                        console.log(filterString);
                    }
                    else {
                       filterString = loadOptions.filter.join('')
                       console.log(filterString);
                    }
                }


                return this.http.get(this.API_URL + url + '/' + params)
                    .toPromise()
                    .then((res: any) => {
                        return {
                            data: res.results,
                            totalCount: res.count
                        }
                    })
                    .catch(error => { throw 'Data Loading Error' });
            },
            insert: (values) => {
                var djangoObject = this.testObject(values)
                return this.http.post(this.API_URL + url + '/', djangoObject)
                    .toPromise();
            },
            remove: (key) => {
                return this.http.delete(this.API_URL + url + '/' + key.djangoid + '/')
                    .toPromise();
            },
            update: (key, values) => {
                var updateObj = this.createObject(key, values)
                return this.http.put(this.API_URL + url + '/' + key.djangoid + '/', updateObj)
                    .toPromise();
            }
        });
        return myStore;
    }

    editObject(title: string) {

        let editObj = {};
        const myTitle: string = 'Editing ' + title + ' Information';

        editObj = {
            allowUpdating: true,
            mode: 'popup',
            allowAdding: true,
            allowDeleting: true,
            popup: {
                title: myTitle,
                showTitle: true,
            },
        };

        return editObj;
    }

    editObjectTest() {

        let editObj = {};
        const myTitle: string = 'Editing';

        editObj = {
            allowUpdating: true,
            mode: 'popup',
            allowAdding: true,
            allowDeleting: true,
            popup: {
                title: myTitle,
                showTitle: true,
            },
        };

        return editObj;
    }



    testObject(values: any) {

        const postObj = values;

        console.log(values)

        if (_.has(values, 'djangoid')) {
        console.log("found id")
        return postObj;
            
        } else {
            console.log("no id found")
            postObj['djangoid'] = 0; // type error
            return postObj;
        }       

    }



    createObject(key: any, values: any) {

        const postObj = key;

        let myParams: string[] = [];
        let myValue: any[] = [];

        myParams = Object.keys(values);
        myValue = Object.values(values);

        for (let i = 0; i < myParams.length; i++) {
            postObj[myParams[i]] = myValue[i];
        }

        return postObj;
    }

    onCellPrepared(e) {
        if (e.rowType === 'data' && e.column.command === 'edit') {
            const isEditing = e.row.isEditing;
            const cellElement = e.cellElement;

            if (isEditing) {
                const saveLink = cellElement.querySelector('.dx-link-save');
                const cancelLink = cellElement.querySelector('.dx-link-cancel');

                saveLink.classList.add('dx-icon-save');
                cancelLink.classList.add('dx-icon-revert');

                saveLink.textContent = '';
                cancelLink.textContent = '';
            } else {
                const editLink = cellElement.querySelector('.dx-link-edit');
                const deleteLink = cellElement.querySelector('.dx-link-delete');

                editLink.classList.add('dx-icon-edit');
                editLink.classList.add('dx-make-me-a-button');
                deleteLink.classList.add('dx-icon-trash');
                deleteLink.classList.add('dx-make-me-a-button');

                editLink.textContent = '';
                deleteLink.textContent = '';
            }
        }

        if (e.rowType === 'header' && e.column.command === 'edit') {
            const cellElement = e.cellElement;
            cellElement.textContent = 'Actions';
        }

    }

    onContentReady(e) {
        e.component.columnOption('command:edit', 'visibleIndex', -1);
    }

    getRegular(url: string) {
        return this.http.get<any[]>(this.API_URL + url + '/')
    }

    lastTest(){
        return new CustomStore({
            key: "value",
            loadMode: "raw",
            load: function () {
              return this.http.get(this.API_URL + 'Theodore/portfoliolist' + '/')
                .toPromise();
            }
          })
    }

  

    getRegularObservable(url: string): Observable<any>  {
        return this.http.get<any[]>(this.API_URL + url + '/').map((res:any) => this.portfolios)
    }

    

    getRegularNoDB(url: string) {
        return this.http.get(this.API_URL_NO_DATABASE + url)
    }

    postRegular(url: string, data: any) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }

        return this.http
        .post(this.API_URL_NO_DATABASE + url, data, httpOptions)
            .subscribe(
                res => {
                    console.log(res);
                },
                err => {
                    console.log('Error occured');
                }
            );        
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server Error');
    }

    getHolidays(url: string) {
        return this.http.get('https://data.gov.au/api/3/action/datastore_search?resource_id=31eec35e-1de6-4f04-9703-9be1d43d405b' + url)
    }

    formate2Decimal() {

        let formate2Decimal = {};

        formate2Decimal = {
            format: {
                // tslint:disable-next-line:object-literal-shorthand
                formatter: function (originalValue) {
                    return originalValue.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                    });
                },
            }
        }

        return formate2Decimal;
    }

    formate4Decimal() {

        let formate4Decimal = {};

        formate4Decimal = {
            format: {
                // tslint:disable-next-line:object-literal-shorthand
                formatter: function (originalValue) {
                    return originalValue.toLocaleString('en-US', {
                        minimumFractionDigits: 4,
                    });
                },
            }
        }

        return formate4Decimal;
    }

    // add (or subtract) business days to provided date
    addBusinessDays (startingDate: Date, daysToAdjust: number, holidays = []) {
        var newDate = new Date(startingDate.valueOf()),
            businessDaysLeft,
            isWeekend,
            direction;

        if (daysToAdjust === 0) {
            return startingDate;
        }
        direction = daysToAdjust > 0 ? 1 : -1;
        businessDaysLeft = Math.abs(daysToAdjust);
        while (businessDaysLeft) {
            newDate.setDate(newDate.getDate() + direction);
            isWeekend = newDate.getDay() in { 0: 'Sunday', 6: 'Saturday' };
            if (!isWeekend) {
                if(!holidays.includes(newDate)){
                    businessDaysLeft--;
                }
            }
        }        

        return newDate;
    };
    

    dateString(dateme: Date) {

        const d = new Date(dateme);


        let mymonth: string = '' + (d.getMonth() + 1);
        let myday: string = '' + d.getDate();
        const myyear: string = d.getFullYear().toString();

        if (mymonth.length < 2) {
            mymonth = '0' + mymonth;
        }
        if (myday.length < 2) {
            myday = '0' + myday;
        }

        return [myyear, mymonth, myday].join('-');
    }

    private _errorHandler(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Some Error Occured');
    }


    getPortfolios() {
        return new Promise(resolve => {
          this.http.get('http://192.168.1.179:5671/Theodore/portfoliolist/').take(1).subscribe((response:any) => {
            resolve(response);
          }, err => {
            console.log(err);
          });
        });
      }
}



