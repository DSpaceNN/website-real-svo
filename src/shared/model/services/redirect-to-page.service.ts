import {inject, Injectable, signal} from '@angular/core';
import {Router} from "@angular/router";
import {createParams, IQueryParamsQuestionOrAnswers, QueryParamsQuestionOrAnswers} from "../types/query-params";

@Injectable({
  providedIn: 'root'
})
export class RedirectToPageService {
  private _router = inject(Router)
 readonly #queryParams = signal<IQueryParamsQuestionOrAnswers>(createParams)


 public setQueryParams(params:IQueryParamsQuestionOrAnswers) {
    this.#queryParams.set(params)
  }
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
  redirectToCreateSurveyAdminPanelPage(queryParams?:string) {
    this._router.navigate(['/admin-panel/surveys/survey/', { outlets: { 'currentSurveyStatusStep': ['create-survey'] } }],{
      queryParams: this.#queryParams()
    });
  }
  redirectToCreateQuestionsAndAnswersAdminPanelPage() {
    this._router.navigate(['/admin-panel/surveys/survey/', { outlets: { 'currentSurveyStatusStep': ['create-survey-questions-answers'] } }],{
      queryParams: this.#queryParams()
    });
  }
redirectToAdminPanel () {
  this._router.navigate(['/admin-panel'],
    { queryParams: { key: 'value' } });
}
redirectToLoginPage () {
    this._router.navigate(['/login'])
}
  constructor() { }
}
