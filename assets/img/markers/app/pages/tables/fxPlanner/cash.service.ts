import { Injectable, Inject, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()

export class CashforecastService {

  constructor(private http: HttpClient) { }

  //http://192.168.1.107:8888/PM_app/getCash?portfolioCode=G006&valueDate=2017-04-28

  public fetchCashForecast(portfolioCode: string, valueDate: string) {
    return this.http.get('http://192.168.1.179:5671/RLT/getCash?'
      + 'portfolioCode=' + portfolioCode
      + '&valueDate=' + valueDate
    )
  }
}
