import {ChangeDetectionStrategy, Component, computed, inject, OnInit, ViewChild} from '@angular/core';
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {LineLightGrayComponent} from "../../shared/ui/line-light-gray/line-light-gray.component";
import {TitleComponent} from "../../shared/ui/title/title.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SurveyService} from "./model/service/survey.service";
import {AdminPanelSubCardComponent} from "../../features/admin-panel-sub-card/admin-panel-sub-card.component";
import {AdminAddSurveyComponent} from "../../features/admin-add-survey/admin-add-survey.component";
import AddedSurveyStepTwoComponent from "../added-survey-step-two/added-survey-step-two.component";
import {CreateSurveyFormComponent} from "../../features/create-survey-form/create-survey-form.component";
import {AdminDashboardsService} from "../../pages/admin-panel/model/services/admin-dashboards.service";
import {NgClass} from "@angular/common";
import {RedirectToPageService} from "../../shared/model/services/redirect-to-page.service";
import {AdminPanelSubHeaderComponent} from "../../shared/ui/admin-panel-sub-header/admin-panel-sub-header.component";
import {SubHeaderTitleComponent} from "../../features/sub-header-title/sub-header-title.component";
import {PlusIconComponent} from "../../shared/icons/plus-icon/plus-icon.component";

@Component({
  selector: 'app-create-survey',
  standalone: true,
  imports: [
    ButtonEventComponent,
    DescriptionComponent,
    LineLightGrayComponent,
    TitleComponent,
    ReactiveFormsModule,
    AdminPanelSubCardComponent,
    AdminAddSurveyComponent,
    AddedSurveyStepTwoComponent,
    CreateSurveyFormComponent,
    NgClass,
    AdminPanelSubHeaderComponent,
    SubHeaderTitleComponent,
    PlusIconComponent
  ],
  template: `
    <app-admin-panel-sub-header>
      <div class="flex items-center gap-2" title>
        <app-sub-header-title [status]="true"></app-sub-header-title>
      </div>
      <button (click)="redirectToCreateSurvey()" btn class="second_btn_admin flex gap-1">
        Отменить
      </button>
    </app-admin-panel-sub-header>
    <div class="px-6">
      <div class="w-full flex justify-between items-center mb-12 mt-6">
        <div class="flex items-center gap-2">
          <div class="rounded-[8px] bg-light-green-admin py-1 px-6 text-center font-medium text-[18px]">
            1/2 шаг
          </div>
          <h2 class="font-medium text-[18px]">Добавьте вопросы и ответы, укажите правильные</h2>
        </div>
        <div class="flex">
          <button  (click)="nextStep()" class="main_btn_admin font-medium px-5 py-2">
            Далее
          </button>
        </div>
      </div>
      <app-create-survey-form></app-create-survey-form>
    </div>
  `,
  styles: ``,
  host: {
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CreateSurveyComponent {
  @ViewChild(CreateSurveyFormComponent) createSurveyFormComponent!: CreateSurveyFormComponent;
  private _redirectService = inject(RedirectToPageService)
  private _adminDashboardService = inject(AdminDashboardsService)
  redirectToCreateSurvey() {
    console.log(1)
    this._redirectService.redirectToSurveyAdminPanelPage()
  }
  nextStep() {
    this._redirectService.redirectToCreateQuestionsAndAnswersAdminPanelPage()
    this._adminDashboardService.nextStepCreateSurvey()
  }
}
