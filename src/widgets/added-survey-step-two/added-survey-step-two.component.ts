import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {TextAreaComponent} from "../../shared/ui/text-area/text-area.component";
import {CurrentStepQuestionComponent} from "../../shared/ui/current-step-question/current-step-question.component";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {DragTwoIconComponent} from "../../shared/icons/drag-two-icon/drag-two-icon.component";
import {
  AddedSurveyQuestionsBlockComponent
} from "../../features/added-survey-questions-block/added-survey-questions-block.component";
import {CreateSurveyService} from "../../pages/admin-panel/model/services/create-survey.service";
import {RadioButtonComponent} from "../../shared/ui/radio-button/radio-button.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-added-survey-step-two',
  standalone: true,
  imports: [
    TextAreaComponent,
    CurrentStepQuestionComponent,
    CdkDropList,
    CdkDrag,
    DragTwoIconComponent,
    AddedSurveyQuestionsBlockComponent,
    RadioButtonComponent,
    FormsModule
  ],
  template: `
    <div class="scrollbar max-h-[700px] overflow-auto max-w-[830px]">
      <div class="p-6">
      @for (item of questionsOrAnswersItems();track item) {
        <div class="flex gap-1 flex-col" >
          <div class="flex w-full items-start gap-6">
            <app-current-step-question [step]="$index + 1"></app-current-step-question>
            <app-text-area [inputValue]="'hhh'"  (value)="checkStatus($event, item.sequence)" class="w-[760px]" valueLabel="Введите вопрос" >
              <div (click)="toggleShowAnswers(item.sequence)" text-area-btn class="h-20 w-10 bg-light-gray-admin rounded-[8px] hover:opacity-40 transition-all flex justify-center items-center">
                <svg [style.transform]="item.showAnswers ? 'rotate(180deg)' : 'rotate(0)'"  xmlns="http://www.w3.org/2000/svg" cursor="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <mask id="mask0_302_183" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_302_183)">
                    <path d="M12 10.8004L8.10005 14.7004C7.91672 14.8837 7.68338 14.9754 7.40005 14.9754C7.11672 14.9754 6.88338 14.8837 6.70005 14.7004C6.51672 14.5171 6.42505 14.2837 6.42505 14.0004C6.42505 13.7171 6.51672 13.4837 6.70005 13.3004L11.3 8.70039C11.5 8.50039 11.7334 8.40039 12 8.40039C12.2667 8.40039 12.5 8.50039 12.7 8.70039L17.3 13.3004C17.4834 13.4837 17.575 13.7171 17.575 14.0004C17.575 14.2837 17.4834 14.5171 17.3 14.7004C17.1167 14.8837 16.8834 14.9754 16.6 14.9754C16.3167 14.9754 16.0834 14.8837 15.9 14.7004L12 10.8004Z" fill="#161616"/>
                  </g>
                </svg>
              </div>
              <div   text-area-btn class="h-20 w-10 bg-light-gray-admin rounded-[8px] hover:opacity-40 transition-all flex justify-center items-center">
                <app-drag-two-icon></app-drag-two-icon>
              </div>
            </app-text-area>
          </div>
          @if(item.showAnswers) {
    <div class="ml-12 max-w-[620px]">
      <h2 class="text-[18px] font-[400] mt-6 mb-2">Введите варианты ответа и укажите правильный вариант</h2>
            <app-added-survey-questions-block [answers]="item.options" class="">
              <ng-template #input let-answers>
                <app-text-area [positionCloseIcon]="{top:'1.9rem', right:'3rem'}" (value)="changeAnswers($event,item.sequence,answers.id)">
                  <div text-area-btn class="h-20 w-10 bg-light-gray-admin rounded-[8px] hover:opacity-40 transition-all flex justify-center items-center">
                    <input class="w-6 h-6 accent-[#161616]" type="radio"
                           [attr.name]="'answers-group-' + item.sequence"
                           [value]="answers.id"
                           (change)="onRadioButtonChange(item.sequence, answers.id)">
                  </div>
                </app-text-area>
              </ng-template>
            </app-added-survey-questions-block>
    </div>
          }
        </div>
      }
    </div>
    </div>
  `,
  styles: [`
    .cdk-drag {
      cursor: url('http://www.rw-designer.com/cursor-extern.php?id=82009'), auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AddedSurveyStepTwoComponent {
  private _createSurveyService = inject(CreateSurveyService)
  public questionsOrAnswersItems = this._createSurveyService.questionsOrAnswersStorage
  public selectedAnswer!:number

  // _______________________________________________________________________________
  checkStatus(textQuestion:string,numberQuestion:number) {
   this._createSurveyService.updateQuestionText(numberQuestion,textQuestion)
    console.log(this._createSurveyService.questionsOrAnswersStorage())
  }
  // _______________________________________________________________________________
  changeAnswers(answerText: string,sequence: number,optionId: number,) {
    this._createSurveyService.updateAnswerText(sequence,optionId,answerText)
    console.log(this._createSurveyService.questionsOrAnswersStorage())
  }
  // _______________________________________________________________________________
  onRadioButtonChange(sequence:number,optionId:number): void {
 this._createSurveyService.selectAnswer(sequence,optionId)
    console.log(this._createSurveyService.questionsOrAnswersStorage())

  }
  toggleShowAnswers(sequence:number) {
    this._createSurveyService.toggleShowAnswers(sequence)
  }

}
