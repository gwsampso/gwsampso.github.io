/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from './auth-guard.service';

// import { NB_AUTH_TOKEN_CLASS, NbAuthSimpleToken } from '@nebular/auth';
import { NB_AUTH_TOKEN_CLASS, NbAuthJWTToken  } from '@nebular/auth';
import { BaseTradeComponent } from './@core/base/base.trade.component';
import { BaseCashComponent } from './@core/base/base.cash.component';
import { BasePriceComponent } from './@core/base/base.price.component';

import { SharedModule } from './@core/shared.module';

@NgModule({
  declarations: [AppComponent, BaseTradeComponent, BaseCashComponent, BasePriceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    SharedModule,
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard,
    { provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken },
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
