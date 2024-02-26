import {computed, Injectable, signal} from '@angular/core';
import {ICreateSurvey} from "../../../../features/create-survey-form/model/types/create-survey-form.type";

@Injectable({
  providedIn: 'root'
})
export class CreateSurveyService {
  readonly #surveyStorage = signal<ICreateSurvey>({name: '', slug: ''})
  public readonly surveyStorage = computed(() => this.#surveyStorage())

  setSurvey(survey:ICreateSurvey) {
    this.#surveyStorage.set(survey)
  }
  constructor() { }
}
