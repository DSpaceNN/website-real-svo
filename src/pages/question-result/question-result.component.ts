import { ChangeDetectionStrategy, Component } from '@angular/core';
import {QuestionResultHeaderComponent} from "../../widgets/question-result-header/question-result-header.component";
import {QuestionResultMainComponent} from "../../widgets/question-result-main/ui/question-result-main.component";
import {LineWhiteComponent} from "../../shared/ui/line-white/line-white.component";

@Component({
  selector: 'app-question-result',
  standalone: true,
  imports: [
    QuestionResultHeaderComponent,
    QuestionResultMainComponent,
    LineWhiteComponent
  ],
  template: `
  <section>
    <app-question-result-header></app-question-result-header>
    <section>
      <app-question-result-main [questionsAnswers]="data"></app-question-result-main>
    </section>
  </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class QuestionResultComponent {
 data = [
    {
      id:1,
      title:'1',
      description:'Какой‑то вопрос / очень интересный / очень важный, вы придумали — вы молодцы.'
    },    {
      id:2,
      title:'1',
      description:'Какой‑то вопрос / очень интересный / очень важный, вы придумали — вы молодцы.'
    },    {
      id:3,
      title:'1',
      description:'Какой‑то вопрос / очень интересный / очень важный, вы придумали — вы молодцы.'
    },    {
      id:4,
      title:'1',
      description:'Какой‑то вопрос / очень интересный / очень важный, вы придумали — вы молодцы.'
    },    {
      id:5,
      title:'1',
      description:'Какой‑то вопрос / очень интересный / очень важный, вы придумали — вы молодцы.'
    },    {
      id:6,
      title:'1',
      description:'Какой‑то вопрос / очень интересный / очень важный, вы придумали — вы молодцы.'
    },    {
      id:7,
      title:'1',
      description:'Какой‑то вопрос / очень интересный / очень важный, вы придумали — вы молодцы.'
    },    {
      id:8,
      title:'1',
      description:'Какой‑то вопрос / очень интересный / очень важный, вы придумали — вы молодцы.'
    },
  ]
}
