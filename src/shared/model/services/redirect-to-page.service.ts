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
  constructor() { }
}
