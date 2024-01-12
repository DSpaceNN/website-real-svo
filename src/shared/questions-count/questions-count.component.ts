import { Component } from '@angular/core';
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'app-questions-count',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './questions-count.component.html',
  styles: [
    `
      .max_question_item {
        color:  rgba(255, 255, 255, 0.60);

      }
    `
  ]
})
export class QuestionsCountComponent {

}
