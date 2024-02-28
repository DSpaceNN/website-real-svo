import {computed, inject, Injectable, Signal, signal} from '@angular/core';
import {AbstractApiService} from "../../../../shared/model/services/abstract-http.service";
import {API} from "../../../../shared/model/utils/api.endpoints";
import {IDeleteSurveyDto, ISurvey, ISurveyDto} from "../../../../shared/model/types/surveys";
import {Sorting} from "../../../admin-results/model/types/survey-result";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  readonly #filterSurveyValue = signal<string>('')
  public readonly filterSurveyValue = computed(() => this.#filterSurveyValue())
//   _________________________________________________________________________________________

  readonly #skipCount = signal<number>(0)
  public readonly skipCount = computed(() => this.#skipCount())
//   _________________________________________________________________________________________

  readonly #takeCount = signal<number>(6)
  public readonly takeCount = computed(() => this.#takeCount())
//   _________________________________________________________________________________________

  readonly #surveys = signal<ISurvey[]>([])
  public readonly surveys = computed(() => this.#surveys())
//   _________________________________________________________________________________________
  readonly #totalCountSurveys = signal<number>(0);
  public readonly totalCountSurveys = computed(() => this.#totalCountSurveys())
//   _________________________________________________________________________________________
  readonly #sortingSurveyResult = signal<Sorting>({active: '',direction: ''})
  public readonly sortingSurveyResult = computed(() => this.#sortingSurveyResult())
//   _________________________________________________________________________________________
  setSortingValue(sortingValue:Sorting) {
    this.#sortingSurveyResult.set(sortingValue)
  }

apiService = inject(AbstractApiService)
  setSurvey (requestBody:ISurvey) {
    this.apiService.request(API.CREATE_SURVEY,requestBody).subscribe(() => {
      console.log('done')
    })
  }
  getSurvey() {
    const params = new URLSearchParams({
      ...{ Take: String(this.#takeCount()) },
      ...{ Skip: String(this.#skipCount()) },
      ...(this.#sortingSurveyResult().direction && { Sorting: String(`${this.#sortingSurveyResult().active} ${this.#sortingSurveyResult().direction}`)}),
      ...(this.filterSurveyValue().length && { Filter: String(this.filterSurveyValue())}),
    });

    this.apiService.request<ISurveyDto>(API.GET_SURVEY, undefined, { queryParams: params.toString() }).subscribe((survey) => {
      this.#surveys.set(survey.result.items)
      this.#totalCountSurveys.set(survey.result.totalCount)
    })
  }
  deleteSurvey(userId: string) {
    this.apiService.request(API.DELETE_SURVEY, undefined,{urlParams: userId}).subscribe((survey) => {
      this.#surveys.update((survey) => survey.filter((v) => v.id !== userId ))
      this.#totalCountSurveys.update((v) => v - 1)
    })
  }
  setFiler (val:string) {
    this.#filterSurveyValue.set(val)
  }

  setSkipCount (skipCount:number) {
    this.#skipCount.set(skipCount)
  }
  setTakeCount(takeCount:number) {
    this.#takeCount.set(takeCount)
  }
}
