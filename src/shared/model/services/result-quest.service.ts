import {computed, inject, Injectable, signal} from '@angular/core';
import {AbstractApiService} from "./abstract-http.service";
import {API} from "../utils/api.endpoints";
import {SurveyFeedbackAnswer, SurveyFeedbackDto} from "../types/surveys";

@Injectable({
  providedIn: 'root'
})
export class ResultQuestService {
  readonly #surveyFeedback = signal<SurveyFeedbackAnswer[]>([])
  public readonly surveyFeedback = computed(() => this.#surveyFeedback())
  private _apiService = inject(AbstractApiService)
  public getSurveyFeedback(id:string) {
      this._apiService.request<SurveyFeedbackDto>(API.GET_SURVEY_FEEDBACK, undefined,{urlParams: id}).subscribe((feedback) => {
        this.#surveyFeedback.set(feedback.result.answers)
      })
    }
  constructor() { }
}
