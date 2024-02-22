import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {NgClass} from "@angular/common";
import {AdminDashboardsService} from "../../pages/admin-panel/model/services/admin-dashboards.service";
import {CreateSurveyFormComponent} from "../create-survey-form/create-survey-form.component";
import {TextAreaComponent} from "../../shared/ui/text-area/text-area.component";
import {DragAndDropWrapperComponent} from "../../shared/ui/drag-and-drop-wrapper/drag-and-drop-wrapper.component";
import {AddedSurveyStepTwoComponent} from "../../widgets/added-survey-step-two/added-survey-step-two.component";
import {CurrentStepQuestionComponent} from "../../shared/ui/current-step-question/current-step-question.component";

@Component({
  selector: 'app-admin-add-survey',
  standalone: true,
  imports: [
    NgClass,
    CreateSurveyFormComponent,
    TextAreaComponent,
    DragAndDropWrapperComponent,
    AddedSurveyStepTwoComponent,
    CurrentStepQuestionComponent
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
      @if (firstStep()) {
      <app-create-survey-form></app-create-survey-form>
    } @else {
      <div class="w-full">
        <app-added-survey-step-two>
        </app-added-survey-step-two>
      </div>

      }
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
