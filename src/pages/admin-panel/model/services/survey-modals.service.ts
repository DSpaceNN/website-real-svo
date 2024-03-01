import {inject, Injectable} from '@angular/core';
import {ConfirmDialog} from "../../../../shared/model/decorators/confirm-dialog.decorator";
import {
  AdminModalCreateErrorComponent
} from "../../../../features/admin-modal-create-error/admin-modal-create-error.component";
import {RedirectToPageService} from "../../../../shared/model/services/redirect-to-page.service";
import {CreateSurveyService} from "./create-survey.service";
import {ICreateSurvey} from "../../../../features/create-survey-form/model/types/create-survey-form.type";
import {
  AdminModalSuccesCreateAnswerComponent
} from "../../../../features/admin-modal-succes-create-answer/admin-modal-succes-create-answer.component";

@Injectable({
  providedIn: 'root'
})
export class SurveyModalsService {
  private _redirectService = inject(RedirectToPageService)
  private _createSurveyService = inject(CreateSurveyService)

  @ConfirmDialog(AdminModalCreateErrorComponent, {
  width: '410px'
})
  openModalError() {
    this._redirectService.redirectToSurveyAdminPanelPage()
    this._createSurveyService.resetQuestionsValue()
    this._createSurveyService.resetSurvey()
  }
  @ConfirmDialog(AdminModalSuccesCreateAnswerComponent, {
    width: '410px'
  })
  openSuccessModal(data:ICreateSurvey) {
    this._redirectService.redirectToSurveyAdminPanelPage()
    this._createSurveyService.resetQuestionsValue()
    this._createSurveyService.resetSurvey()
  }
  constructor() { }
}
