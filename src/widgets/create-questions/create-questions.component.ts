import {ChangeDetectionStrategy, Component, computed, effect, inject} from '@angular/core';
import AddedSurveyStepTwoComponent from "../added-survey-step-two/added-survey-step-two.component";
import {AdminPanelSubHeaderComponent} from "../../shared/ui/admin-panel-sub-header/admin-panel-sub-header.component";
import {PlusIconComponent} from "../../shared/icons/plus-icon/plus-icon.component";
import {SubHeaderTitleComponent} from "../../features/sub-header-title/sub-header-title.component";
import {RedirectToPageService} from "../../shared/model/services/redirect-to-page.service";
import {ConfirmDialog} from "../../shared/model/decorators/confirm-dialog.decorator";
import {ConfirmationExitComponent} from "../../features/confirmation-exit/confirmation-exit.component";
import {SurveyService} from "../create-survey/model/service/survey.service";
import {CreateSurveyService} from "../../pages/admin-panel/model/services/create-survey.service";
import {AsyncPipe, NgClass} from "@angular/common";
import {question, questionStorage} from "../../shared/model/types/surveys";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";
import {QueryParamsQuestionOrAnswers} from "../../shared/model/types/query-params";

@Component({
  selector: 'app-create-questions',
  standalone: true,
  imports: [
    AddedSurveyStepTwoComponent,
    AdminPanelSubHeaderComponent,
    PlusIconComponent,
    SubHeaderTitleComponent,
    NgClass,
    AsyncPipe
  ],
  template: `
    <app-admin-panel-sub-header>
      <div class="flex items-center gap-2" title>
        <app-sub-header-title ></app-sub-header-title>
      </div>
    </app-admin-panel-sub-header>

   <div class="px-6 mt-6">
     <div class="w-full flex justify-between items-center mb-12">
       <div class="flex items-center gap-2">
         <div class="rounded-[8px] bg-light-green-admin py-1 px-6 text-center font-medium text-[18px]">
           2/2 шаг
         </div>
         <h2 class="font-medium text-[18px]">{{stepSecond$ | async}}</h2>
       </div>
       <div class="flex gap-1">
         <button (click)="redirectToCreateSurvey()" class="second_btn_admin font-medium px-5 py-2">
           Назад
         </button>
         <button [ngClass]="{'opacity-40 pointer-events-none':!areQuestionsValid(storageSurvey())}" (click)="createSurveyOrQuestionOrAnswers()" class="main_btn_admin font-medium px-5 py-2">
           Сохранить
         </button>
       </div>
     </div>
     <app-added-survey-step-two>
     </app-added-survey-step-two>
     @if(($editMode | async) === QueryParamsQuestionOrAnswers.CREATE_STEP_FIRST) {
     <button (click)="createNewQuestion()" class="main_btn_admin flex gap-1">Добавить вопрос <app-plus-icon></app-plus-icon></button>
     }
   </div>
  `,
  styles: ``,
  host: {

  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CreateQuestionsComponent {
  private activatedRouter = inject(ActivatedRoute)
  $editMode = this.activatedRouter.queryParams.pipe(map(p => p['step_first']))
private _redirectService = inject(RedirectToPageService)
  private _createSurveyService = inject(CreateSurveyService)
  private _surveyService = inject(SurveyService)
  public storageSurvey = this._createSurveyService.questionsOrAnswersStorage

  private activatedRoute = inject(ActivatedRoute);
  stepSecond$ = this.activatedRoute.queryParams.pipe(map((p) => p['step_second']));
  // ______________________________________________________________________________________

  @ConfirmDialog(ConfirmationExitComponent, {
    minWidth: '400px',
  })
  redirectToCreateSurvey() {
  this._redirectService.redirectToCreateSurveyAdminPanelPage()
    this._createSurveyService.resetQuestionsValue()
  }
   areQuestionsValid(questions: questionStorage[]): boolean {
     return questions.every(question =>
       question.questionText &&
       question.options.some(option =>
         option.optionText !== undefined && option.isCorrect
       )
    );
  }
  createSurveyOrQuestionOrAnswers() {
        this._surveyService.setSurvey(this._createSurveyService.surveyStorage());

  }
  createNewQuestion() {
  this._createSurveyService.addedNewQuestionOrAnswerItem()
  }

  protected readonly QueryParamsQuestionOrAnswers = QueryParamsQuestionOrAnswers;
}
