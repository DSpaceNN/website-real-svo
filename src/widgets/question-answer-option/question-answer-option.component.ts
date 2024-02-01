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
import {TitleComponent} from "../../shared/ui/title/title.component";

@Component({
  selector: 'app-question-answer-option',
  standalone: true,
  imports: [
    MatRadioGroup,
    NgTemplateOutlet,
    TitleComponent
  ],
  template: `
  <mat-radio-group>
    @for(answer of answers(); track answer?.id) {
    <ng-template [ngTemplateOutlet]="answerOption" [ngTemplateOutletContext]="{$implicit:answer}"></ng-template>
    } @empty {
      <app-title class="text-[16px]">Данные не найдены</app-title>
    }
  </mat-radio-group>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswerOptionComponent<T extends {id:number}> {
  answers = input.required<T[] | null>()
@ContentChild("questionAnswerOption", {read: TemplateRef})answerOption!:TemplateRef<{$implicit:T}>
}
