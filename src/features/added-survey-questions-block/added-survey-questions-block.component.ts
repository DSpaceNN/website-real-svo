import {ChangeDetectionStrategy, Component, ContentChild, input, TemplateRef} from '@angular/core';
import {TextAreaComponent} from "../../shared/ui/text-area/text-area.component";
import {NgTemplateOutlet} from "@angular/common";
import {optionsStorage} from "../../shared/model/types/surveys";

@Component({
  selector: 'app-added-survey-questions-block',
  standalone: true,
  imports: [
    TextAreaComponent,
    NgTemplateOutlet
  ],
  template: `
   <div class=" flex flex-col gap-2">
     @for (item of answers();track item) {
     <ng-template [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{$implicit:item}"></ng-template>
     }
   </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddedSurveyQuestionsBlockComponent<TRead> {
  answers = input.required<TRead[]>()
@ContentChild('input', {read:TemplateRef}) template!:TemplateRef<{$implicit:TRead}>
}
