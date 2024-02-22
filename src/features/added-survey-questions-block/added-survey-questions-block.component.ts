import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TextAreaComponent} from "../../shared/ui/text-area/text-area.component";

@Component({
  selector: 'app-added-survey-questions-block',
  standalone: true,
  imports: [
    TextAreaComponent
  ],
  template: `
   <div class=" flex flex-col gap-2">
     <app-text-area></app-text-area>
     <app-text-area></app-text-area>
     <app-text-area></app-text-area>
   </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddedSurveyQuestionsBlockComponent {

}
