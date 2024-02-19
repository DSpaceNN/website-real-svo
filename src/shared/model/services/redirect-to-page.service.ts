import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RedirectToPageService {
  private _router = inject(Router)
redirectToPageNotThisTime () {
  this._router.navigate(['/questions/failed'])
}
redirectToWinPage () {
    this._router.navigate(['/questions/win'])
}
redirectToCartNotFoundPage () {
    this._router.navigate(["/cart-not-found"])
}
redirectToErrorPage () {
    this._router.navigate(['/error'])
}
redirectToSurveyAdminPanelPage() {
    this._router.navigate(['/admin-panel/survey'])
}
  constructor() { }
}
