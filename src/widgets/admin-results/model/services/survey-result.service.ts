import {computed, inject, Injectable, signal} from '@angular/core';
import {
  ISurveyResultDto, Sorting,
  SurveyResult,
  SurveyResultQueryParams,
  UpdateProcessedStatusDto
} from "../types/survey-result";
import {AbstractApiService} from "../../../../shared/model/services/abstract-http.service";
import {API} from "../../../../shared/model/utils/api.endpoints";
import {finalize} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SurveyResultService {
  private _apiService = inject(AbstractApiService)
  // __________________________________________________________________________
  readonly #IsAwaitingReceipt = signal<boolean>(true)
  public readonly IsAwaitingReceipt = computed(() => this.#IsAwaitingReceipt())
  // __________________________________________________________________________
  readonly #surveyResult = signal<SurveyResult[]>([])
  public readonly surveyResult = computed(() => this.#surveyResult())
  // __________________________________________________________________________

  readonly #totalCountSurvey = signal<number>(0)
  public readonly totalCountSurvey = computed(() => this.#totalCountSurvey())
  // __________________________________________________________________________
  readonly #skipCount = signal<number>(0)
  public readonly skipCount = computed(() => this.#skipCount())
//   _________________________________________________________________________________________

  readonly #takeCount = signal<number>(6)
  public readonly takeCount = computed(() => this.#takeCount())
//   _________________________________________________________________________________________
  readonly #filter = signal<string>('')
  public readonly filter = computed(() => this.#filter())
//   _________________________________________________________________________________________
  readonly #sortingSurveyResult = signal<Sorting>({active: '',direction: ''})
  public readonly sortingSurveyResult = computed(() => this.#sortingSurveyResult())


//   _________________________________________________________________________________________
  setSortingValue(sortingValue:Sorting) {
    this.#sortingSurveyResult.set(sortingValue)
  }

//   _________________________________________________________________________________________

  setIsAwaitingReceipt(status:boolean) {
    this.#IsAwaitingReceipt.set(status)
  }
  // __________________________________________________________________________
  setSkipCount (skipCount:number) {
    this.#skipCount.set(skipCount)
  }
  setTakeCount(takeCount:number) {
    this.#takeCount.set(takeCount)
  }
  setFilter(value:string) {
    this.#filter.set(value)
  }
  // __________________________________________________________________________


  public getSurveyResults(params:SurveyResultQueryParams) {
    const queryParams = new URLSearchParams({
      ...(this.#filter().length && { Filter: String(this.#filter()) }),
      ...(this.#sortingSurveyResult().direction && { Sorting: String(`${this.#sortingSurveyResult().active} ${this.#sortingSurveyResult().direction}`) }),
      ...{ IsAwaitingReceipt: String(this.#IsAwaitingReceipt()) },
      ...{ Take: String(this.#takeCount()) },
      ...{ Skip: String(this.#skipCount()) },
    });

    this._apiService.request<ISurveyResultDto>(API.SURVEY_RESULT,undefined, {queryParams:queryParams.toString()}).subscribe((r) => {
      console.log(r, 'result');
      this.#surveyResult.set(r.result.items);
      this.#totalCountSurvey.set(r.result.totalCount);
    })
  }
  public updateStatus(data:UpdateProcessedStatusDto) {
    this._apiService.request<UpdateProcessedStatusDto>(API.UPDATE_PROCESSED_STATUS,data).pipe(
      finalize(() => {
      this.getSurveyResults({})
      })
    ).subscribe((status) => {
      console.log('status',status)
    })
  }
}
