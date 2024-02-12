import {computed, inject, Injectable, signal} from '@angular/core';
import {AbstractApiService} from "../../../../shared/model/services/abstract-http.service";
import {API} from "../../../../shared/model/utils/api.endpoints";
import {ISurvey, ISurveyDto} from "../../../../shared/model/types/surveys";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
   readonly #surveys = signal<ISurvey[]>([])
  public readonly surveys = computed(() => this.#surveys())
apiService = inject(AbstractApiService)
  setSurvey (requestBody:ISurvey) {
    this.apiService.request(API.CREATE_SURVEY,requestBody).subscribe(() => {
      console.log('done')
    })
  }
  getSurvey() {
    this.apiService.request<ISurveyDto>(API.GET_SURVEY).subscribe((survey) => {
      this.#surveys.set(survey.result.items)
  })
  }
  deleteSurvey(id:number) {
  this.apiService.request(API.DELETE_SURVEY,id).subscribe((survey) => {
    console.log(survey)
  })
  }
}
