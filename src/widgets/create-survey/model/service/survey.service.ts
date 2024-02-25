import {computed, inject, Injectable, signal} from '@angular/core';
import {AbstractApiService} from "../../../../shared/model/services/abstract-http.service";
import {API} from "../../../../shared/model/utils/api.endpoints";
import {IDeleteSurveyDto, ISurvey, ISurveyDto} from "../../../../shared/model/types/surveys";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
//   _________________________________________________________________________________________

   readonly #surveys = signal<ISurvey[]>([])
  public readonly surveys = computed(() => this.#surveys())
//   _________________________________________________________________________________________
  readonly #totalCountSurveys = signal<number>(0);
   public readonly totalCountSurveys = computed(() => this.#totalCountSurveys())
//   _________________________________________________________________________________________

apiService = inject(AbstractApiService)
  setSurvey (requestBody:ISurvey) {
    this.apiService.request(API.CREATE_SURVEY,requestBody).subscribe(() => {
      console.log('done')
    })
  }
  getSurvey(skipCount = 0, takeCount = 6, filter = "") {
    const params = new URLSearchParams({
      ...{ Take: String(takeCount) },
      ...{ Skip: String(skipCount) },
      ...(filter !== undefined && { Filter: String(filter) }),
    });

    this.apiService.request<ISurveyDto>(API.GET_SURVEY, undefined, { queryParams: params.toString() }).subscribe((survey) => {
      this.#surveys.set(survey.result.items)
      this.#totalCountSurveys.set(survey.result.totalCount)
    })
  }
  deleteSurvey(userId: string) {
    this.apiService.request(API.DELETE_SURVEY, undefined,{urlParams: userId}).subscribe((survey) => {
      this.#surveys.update((survey) => survey.filter((v) => v.id !== userId ))
    })
  }
  filterSurvey(value:string) {
   this.getSurvey(undefined,undefined,value)
  }
}
