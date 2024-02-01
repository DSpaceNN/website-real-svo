import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  input,
  Output,
  TemplateRef
} from '@angular/core';
import {MatRadioButton, MatRadioChange, MatRadioGroup} from "@angular/material/radio";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-question-answer-option',
  standalone: true,
  imports: [
    MatRadioGroup,
    NgTemplateOutlet
  ],
  template: `
<section>
  <mat-radio-group>
    @for(answer of answers(); track answer?.id) {
    <ng-template [ngTemplateOutlet]="answerOption" [ngTemplateOutletContext]="{$implicit:answer}"></ng-template>
    } @empty {
      <h1>Данные не найдены</h1>
    }
  </mat-radio-group>
</section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswerOptionComponent<T extends {id:number}> {
  answers = input.required<T[] | null>()
@ContentChild("questionAnswerOption", {read: TemplateRef})answerOption!:TemplateRef<{$implicit:T}>
}
