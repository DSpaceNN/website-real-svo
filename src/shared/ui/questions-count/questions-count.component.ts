import { Component } from '@angular/core';
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'app-questions-count',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './questions-count.component.html',
  styleUrl: './questions-count.component.scss'
})
export class QuestionsCountComponent {
}
