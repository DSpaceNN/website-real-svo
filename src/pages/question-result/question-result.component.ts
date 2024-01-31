import { ChangeDetectionStrategy, Component } from '@angular/core';
import {QuestionResultHeaderComponent} from "../../widgets/question-result-header/question-result-header.component";
import {QuestionResultMainComponent} from "../../widgets/question-result-main/ui/question-result-main.component";
import {LineWhiteComponent} from "../../shared/ui/line-white/line-white.component";
import {CtaCardComponent} from "../../features/cta-card/cta-card.component";

@Component({
  selector: 'app-question-result',
  standalone: true,
  imports: [
    QuestionResultHeaderComponent,
    QuestionResultMainComponent,
    LineWhiteComponent,
    CtaCardComponent
  ],
  template: `
  <section class="relative">
    <app-question-result-header></app-question-result-header>
      <app-question-result-main [questionsAnswers]="data"></app-question-result-main>
  </section>
  <div class="fixed w-full bottom-0 z-10 left-0">
    <app-cta-card [backUrl]="backUrl" [forwardUrl]="forwardUrl" >
      <ng-container back>
        В другой раз
      </ng-container>
      <ng-container forward>
        Пройти еще раз
      </ng-container>
    </app-cta-card>
  </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class QuestionResultComponent {
  private _backUrl = '/'
  private _forwardUrl = '/asfaf'


  get backUrl(): string {
    return this._backUrl;
  }

  set backUrl(value: string) {
    this._backUrl = value;
  }

  get forwardUrl(): string {
    return this._forwardUrl;
  }

  set forwardUrl(value: string) {
    this._forwardUrl = value;
  }

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
