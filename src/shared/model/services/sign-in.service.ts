import {computed, inject, Injectable, signal} from '@angular/core';
import {AbstractApiService} from "./abstract-http.service";
import {ISignIn, ISignInDto} from "../types/sign-in";
import {API} from "../utils/api.endpoints";
import {RedirectToPageService} from "./redirect-to-page.service";

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private httpService = inject(AbstractApiService)
  private redirectService = inject(RedirectToPageService)
 public signIn (currentUser:ISignIn) {
  this.httpService.request<ISignInDto>(API.LOGIN,currentUser).subscribe((status) => {
    if(status.result) {
      localStorage.setItem('authToken', status.result.accessToken);
      this.redirectService.redirectToSurveyAdminPanelPage()
    }
  })
 }
  constructor() { }
}
