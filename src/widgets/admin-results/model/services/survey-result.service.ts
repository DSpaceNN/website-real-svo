import {computed, inject, Injectable, signal} from '@angular/core';
import {ISurveyResultDto, SurveyResult, SurveyResultQueryParams} from "../types/survey-result";
import {AbstractApiService} from "../../../../shared/model/services/abstract-http.service";
import {API} from "../../../../shared/model/utils/api.endpoints";

@Injectable({
  providedIn: 'root'
})
export class SurveyResultService {
  private _apiService = inject(AbstractApiService)
  // __________________________________________________________________________
  readonly #surveyResult = signal<SurveyResult[]>([])
  public readonly surveyResult = computed(() => this.#surveyResult())
  // __________________________________________________________________________

  readonly #totalCountSurvey = signal<number>(0)
  public readonly totalCountSurvey = computed(() => this.#surveyResult())
  // __________________________________________________________________________

  public getSurveyResults(params:SurveyResultQueryParams) {
    const { filter, isSuccess, skip, take } = params;

    const queryParams = new URLSearchParams({
      ...(filter !== undefined && { Filter: String(filter) }),
      ...(isSuccess !== undefined && { IsSuccess: String(isSuccess) }),
      ...(skip !== undefined && { Skip: String(skip) }),
      ...(take !== undefined && { Take: String(take) })
    });

    this._apiService.request<ISurveyResultDto>(API.SURVEY_RESULT,undefined, {queryParams:queryParams.toString()}).subscribe((r) => {
      console.log(r);
      this.#surveyResult.set(r.result.items);
      this.#totalCountSurvey.set(r.result.totalCount);
    })
  }
}
