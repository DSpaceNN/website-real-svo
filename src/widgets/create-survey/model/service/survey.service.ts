import {inject, Injectable} from '@angular/core';
import {AbstractApiService} from "../../../../shared/model/services/abstract-http.service";
import {API} from "../../../../shared/model/utils/api.endpoints";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
apiService = inject(AbstractApiService)
  set () {
    const requestBody = {
      name: "answer4",
      slug: "answer4"
    };
    this.apiService.request(API.CREATE_SURVEY,requestBody).subscribe((r) => {
      console.log(r)
    })
  }
  get() {
  this.apiService.request(API.GET_SURVEY).subscribe((r) => {
    console.log(r, '1')
  })
  }
}
