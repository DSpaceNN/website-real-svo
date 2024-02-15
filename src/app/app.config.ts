import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withComponentInputBinding, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient} from "@angular/common/http";
import {HttpErrorInterceptor} from "../shared/model/services/error-interceptor.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withComponentInputBinding(),withViewTransitions()),importProvidersFrom(HttpClientModule),   {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  },]
};
