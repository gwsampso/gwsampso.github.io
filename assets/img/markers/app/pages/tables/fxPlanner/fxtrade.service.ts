import { Injectable, Inject, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()

export class FxTradeService {

  constructor(private http: HttpClient) { }

  //http://192.168.1.107:8888/PM_app/getFXTradeDetails?portfolioCode=G024&valueDate=2017-05-11&givenCCY=AUD&givenAmount=100000&settleCCY=EUR

  public fetchFXTrade(portfolioCode: string, valueDate: string, givenCCY: string, givenAmount: number) {
    return this.http.get('http://192.168.1.179:5671/RLT/getFXTradeDetails?'
      + 'portfolioCode=' + portfolioCode
      + '&valueDate=' + valueDate
      + '&givenCCY=' + givenCCY
      + '&givenAmount=' + givenAmount
    )
  }

}
