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
  this._router.navigate(['/admin-panel/surveys/survey/', { outlets: { 'currentSurveyStatusStep': ['items'] } }]);
}
  redirectToCreateSurveyAdminPanelPage() {
    this._router.navigate(['/admin-panel/surveys/survey/', { outlets: { 'currentSurveyStatusStep': ['create-survey'] } }]);
  }
  redirectToCreateQuestionsAndAnswersAdminPanelPage() {
    this._router.navigate(['/admin-panel/surveys/survey/', { outlets: { 'currentSurveyStatusStep': ['create-survey-questions-answers'] } }]);
  }
redirectToAdminPanel () {
    this._router.navigate(['/admin-panel'])
}
redirectToLoginPage () {
    this._router.navigate(['/login'])
}
  constructor() { }
}
