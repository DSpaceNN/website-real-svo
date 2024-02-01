import {ChangeDetectionStrategy, Component, signal, WritableSignal} from '@angular/core';
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
    <section class="">
      <app-sub-header></app-sub-header>
      <div class="mb-4">
      <div class="flex  gap-2 mb-4">
        <app-red-circle>
          <app-title number-question>1.</app-title>
        </app-red-circle>
        <app-description class="text-white">Какой‑то вопрос / очень интересный / очень важный, вы придумали — вы молодцы.</app-description>
      </div>
        <app-line-white class="w-full"></app-line-white>
      </div>
            <app-question-answer-option  [answers]="[{id:1, value:'hello124', text:'helloBrot1'},{id:2, value:'hell4o', text:'helloBrot'}]">
              <ng-template #questionAnswerOption let-answer>
                  <app-radio-button (valueChange)="onChange($event)" [radioButtonValue]="answer.value">
                  <app-title  radio-value>{{answer.value}}</app-title>
                    @if (answer.value === selectedAnswer()) {
                      <div radio-value class="absolute -left-2 -top-4 -z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="60" viewBox="0 0 58 60" fill="none">
                          <g filter="url(#filter0_f_2938_27858)">
                            <circle cx="28" cy="30" r="26" fill="url(#paint0_radial_2938_27858)" fill-opacity="0.7"/>
                          </g>
                          <defs>
                            <filter id="filter0_f_2938_27858" x="-1.03333" y="0.966667" width="58.0667" height="58.0667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                              <feGaussianBlur stdDeviation="1.51667" result="effect1_foregroundBlur_2938_27858"/>
                            </filter>
                            <radialGradient id="paint0_radial_2938_27858" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28 30) rotate(90) scale(26)">
                              <stop stop-color="#FF2222"/>
                              <stop offset="1" stop-color="#FF2222" stop-opacity="0"/>
                            </radialGradient>
                          </defs>
                        </svg>
                      </div>
                    }
                </app-radio-button>
                <br>
                <app-line-light-gray class="block my-3"></app-line-light-gray>
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
  public readonly selectedAnswer:WritableSignal<string | null> = signal<string | null>(null)
  onChange(event:any) {
    console.log(event)
    this.selectedAnswer.set(event)
  }
click1() {
  console.log(1)
}
click2() {
  console.log(2)
}
}
