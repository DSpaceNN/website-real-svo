import { ChangeDetectionStrategy, Component } from '@angular/core';
import SubHeaderComponent from "../../widgets/sub-header/sub-header.component";
import {RedCircleComponent} from "../../shared/ui/red-circle/red-circle.component";
import {TitleComponent} from "../../shared/ui/title/title.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {LineWhiteComponent} from "../../shared/ui/line-white/line-white.component";
import {CtaCardWrapperComponent} from "../../features/cta-card-wrapper/cta-card-wrapper.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {QuestionAnswerOptionComponent} from "../../widgets/question-answer-option/question-answer-option.component";
import {RadioButtonComponent} from "../../shared/ui/radio-button/radio-button.component";

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
    RadioButtonComponent
  ],
  template: `
    <section class="">
      <app-sub-header></app-sub-header>
      <div>
      <div class="flex items-center gap-2 mb-4">
        <app-red-circle>
          <app-title number-question>1.</app-title>
        </app-red-circle>
        <app-description class="text-white">Lorem ipsum dolor sit.</app-description>
      </div>
        <app-line-white class="w-full"></app-line-white>
      </div>
            <app-question-answer-option  [answers]="[{id:1, value:'hello124', text:'helloBrot1'},{id:2, value:'hell4o', text:'helloBrot'}]">
              <ng-template #questionAnswerOption let-answer>
                <app-radio-button (valueChange)="onChange($event)" [radioButtonValue]="answer.value">
                  <app-title radio-value>{{answer.text}}</app-title>
                </app-radio-button>
              </ng-template>
            </app-question-answer-option>

<!--      absolute block-->
      <app-cta-card-wrapper class="absolute w-full left-0 right-0 bottom-0">
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class QuestionComponent {
  onChange(event:any) {
    console.log(event)
  }
click1() {
  console.log(1)
}
click2() {
  console.log(2)
}
}
