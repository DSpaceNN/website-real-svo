import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {RedirectToPageService} from "./redirect-to-page.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
private _redirectService = inject(RedirectToPageService)
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        if(error.status === 500) {
        this._redirectService.redirectToErrorPage()
        }
        return of(error);
      })
    );
  }
}
