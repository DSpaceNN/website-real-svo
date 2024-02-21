import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {NgClass} from "@angular/common";
import {AdminDashboardsService} from "../../pages/admin-panel/model/services/admin-dashboards.service";
import {CreateSurveyFormComponent} from "../create-survey-form/create-survey-form.component";

@Component({
  selector: 'app-admin-add-survey',
  standalone: true,
  imports: [
    NgClass,
    CreateSurveyFormComponent
  ],
  template: `
        <div class="w-full flex justify-between items-center mb-12">
          <div class="flex items-center gap-2">
            <div class="rounded-[8px] bg-light-green-admin py-1 px-6 text-center font-medium text-[18px]">
              {{currentStep()}}/2 шаг
            </div>
            <h2 class="font-medium text-[18px]">Добавьте вопросы и ответы, укажите правильные</h2>
          </div>
          <div class="flex">
            <button (click)="previousStep()" [ngClass]="{hidden:firstStep()}" class="second_btn_admin mr-2 font-medium px-5 py-2 ">
              Назад
            </button>
            <button (click)="nextStep()" class="main_btn_admin font-medium px-5 py-2">
              {{firstStep() ? 'Далее' : 'Сохранить'}}
            </button>
          </div>
        </div>
        <app-create-survey-form></app-create-survey-form>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminAddSurveyComponent {
  private _adminDashboardService = inject(AdminDashboardsService)
  public readonly firstStep = computed(() => {
   return this._adminDashboardService.stepCreateSurvey() < 2;

  })
  public readonly currentStep = this._adminDashboardService.stepCreateSurvey
  nextStep() {
    this._adminDashboardService.nextStepCreateSurvey()
  }
  previousStep() {
    this._adminDashboardService.previousStepCreateSurvey()
  }
}
