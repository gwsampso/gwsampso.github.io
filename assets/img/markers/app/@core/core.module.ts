import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbEmailPassAuthProvider } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs/observable/of';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';
import { getDeepFromObject } from './helpers';
// import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

// import { BaseTradeComponent } from './base/base.trade.component';
// import { BaseCashComponent } from './base/base.cash.component';
// import { BasePriceComponent } from './base/base.price.component';

// import { SharedModule } from './shared.module';
// import { ThemeModule } from './@theme/theme.module';


const socialLinks = [
  {
    url: '',
    target: '_blank',
    icon: 'socicon-github',
  },
  {
    url: '',
    target: '_blank',
    icon: 'socicon-facebook',
  },
  {
    url: '',
    target: '_blank',
    icon: 'socicon-twitter',
  },
];

const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({
    providers: {
      email: {
        service: NbEmailPassAuthProvider,
        config: {
          baseEndpoint: 'http://192.168.1.179:5671/rest-auth/',
          login: {
            alwaysFail: false,
            rememberMe: true,
            endpoint: 'login/',
            method: 'post',
            redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],
          },
          logout: {
            alwaysFail: false,
            endpoint: 'logout/',
            method: 'post',
            redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully logged out.'],
          },
          token: {
            key: 'token',      
          },
        },
      },
    },
    forms: {
 },
  }).providers,
  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,
  {
    provide: NbRoleProvider,
    useValue: {
      getRole: () => {
        return observableOf('guest'); // here you could provide any role based on any auth flow
      },
    },
  },
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    // ThemeModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [
    // BaseTradeComponent,
    // BaseCashComponent,
    // BasePriceComponent,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
