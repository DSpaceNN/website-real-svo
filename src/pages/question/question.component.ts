import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  Input,
  OnInit,
  signal,
  WritableSignal
} from '@angular/core';
import SubHeaderComponent from "../../widgets/sub-header/sub-header.component";
import {RedCircleComponent} from "../../shared/ui/red-circle/red-circle.component";
import {TitleComponent} from "../../shared/ui/title/title.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {LineWhiteComponent} from "../../shared/ui/line-white/line-white.component";
import {CtaCardWrapperComponent} from "../../features/cta-card-wrapper/cta-card-wrapper.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {QuestionAnswerOptionComponent} from "../../widgets/question-answer-option/question-answer-option.component";
import {RadioButtonComponent} from "../../shared/ui/radio-button/radio-button.component";
import {LineLightGrayComponent} from "../../shared/ui/line-light-gray/line-light-gray.component";
import {SlugService} from "../../shared/model/services/slug.service";
import {QuestionService} from "./model/services/question.service";
import {options, question} from "../../shared/model/types/surveys";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    SubHeaderComponent,
    RedCircleComponent,
    TitleComponent,
    DescriptionComponent,
    LineWhiteComponent,
    CtaCardWrapperComponent,
    ButtonEventComponent,
    QuestionAnswerOptionComponent,
    RadioButtonComponent,
    LineLightGrayComponent
  ],
  template: `
    <section >
      <app-sub-header></app-sub-header>
      <div class="mb-4">
        <div class="flex  gap-2 mb-4 justify-start  items-start md:items-center">
        <app-red-circle>
          <app-title number-question>1.</app-title>
        </app-red-circle>
        <app-description class="text-white">{{questions().questionText}}</app-description>
      </div>
        <app-line-white class="w-full"></app-line-white>
      </div>
      <div class="h-scroll-y overflow-y-scroll  no-scrollbar">
            <app-question-answer-option   [answers]="questions().options">
              <ng-template #questionAnswerOption let-answer>
                  <app-radio-button (valueChange)="onChange($event)" [radioButtonValue]="answer">
                  <app-title  radio-value>{{answer.optionText}}</app-title>
                    @if (answer === selectedAnswer()) {
                      <div radio-value class="absolute -left-2 -top-4 -z-10">
                       <img src="../../assets/images/eclipse_questions.svg" alt="eclipse">
                      </div>
                    }
                </app-radio-button>
                <br>
                <app-line-light-gray class="block my-3"></app-line-light-gray>
              </ng-template>
            </app-question-answer-option>
      </div>
<!--      absolute block-->
      <app-cta-card-wrapper class="fixed w-full left-0 right-0 bottom-0">
        <ng-template #ctaCard>
          <app-button-event (event)="click1()" class="buttonEvent">
            Назад
          </app-button-event>
          <app-button-event (event)="click2()" class="buttonEvent">
            Продолжить
          </app-button-event>
        </ng-template>
      </app-cta-card-wrapper>
    </section>
  `,
  styles: `
  .buttonEvent {
    width: 138px;
    height: 38px;
  }
  .h-scroll-y {
    height: calc(100vh - 310px);

  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class QuestionComponent implements OnInit{
  private _slugService = inject(SlugService)
  private _questionService = inject(QuestionService)
  slug = input<string>('')
  public readonly selectedAnswer:WritableSignal<options> = signal({} as options)
  public readonly questions = this._questionService.currentQuestion
  ngOnInit(): void {
    console.log(this.questions(), 'selected questions')
    this._slugService.set(this.slug())
    this._questionService.getSurveySlug(this.slug())
  }
  onChange(event:any) {
    console.log(event, 'this event')
  this.selectedAnswer.set(event)
    }


  click1() {
  this._questionService.previous()
  }
  click2() {
    this._questionService.next()
  }
}
