import {ChangeDetectionStrategy, Component, input, OnInit} from '@angular/core';
import {RedCircleComponent} from "../../../shared/ui/red-circle/red-circle.component";
import {TitleComponent} from "../../../shared/ui/title/title.component";
import {DescriptionComponent} from "../../../shared/ui/description/description.component";
import {CorrectnessAnswerComponent} from "../../../features/correctness-answer/correctness-answer.component";
import {LineWhiteComponent} from "../../../shared/ui/line-white/line-white.component";

@Component({
  selector: 'app-question-result-main',
  standalone: true,
  imports: [
    RedCircleComponent,
    TitleComponent,
    DescriptionComponent,
    CorrectnessAnswerComponent,
    LineWhiteComponent
  ],
  template: `
    <section>
      @for (quesiton of questResult(); track quesiton?.id){
    <div class="flex gap-2 flex-col my-4">
      <app-red-circle>
        <app-title number-question class="text-[18px]">{{quesiton?.title}}</app-title>
      </app-red-circle>
      <app-description class="text-white">
        {{quesiton?.description}}
      </app-description>
      <app-correctness-answer [correctAnswer]="quesiton?.id < 7"></app-correctness-answer>

    </div>
        @if(!$last) {
          <app-line-white></app-line-white>
        }
      }
    </section>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionResultMainComponent<T> {
questResult = input.required<any[]>({
  alias: 'questionsAnswers'
})



}
