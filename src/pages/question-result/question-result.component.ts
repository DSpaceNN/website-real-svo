import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {QuestionResultHeaderComponent} from "../../widgets/question-result-header/question-result-header.component";
import {QuestionResultMainComponent} from "../../widgets/question-result-main/ui/question-result-main.component";
import {LineWhiteComponent} from "../../shared/ui/line-white/line-white.component";
import {CtaCardComponent} from "../../features/cta-card/cta-card.component";
import {SlugService} from "../../shared/model/services/slug.service";
import {ResultQuestService} from "../../shared/model/services/result-quest.service";
import {LoseOrWinQuestionsService} from "../../shared/model/services/lose-or-win-questions.service";
import {Router} from "@angular/router";

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
      <app-question-result-main [questionsAnswers]="surveyFeedback()"></app-question-result-main>
  </section>
  <div class="fixed w-full bottom-0 z-10 left-0">
    <app-cta-card >
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
export default class QuestionResultComponent implements OnInit{
  private _loseOrWinQuestionsService = inject(LoseOrWinQuestionsService)
  private _resultQuestionsService = inject(ResultQuestService)
  private _router = inject(Router)
  public readonly surveyFeedback = this._resultQuestionsService.surveyFeedback
  ngOnInit(): void {
    console.log('hell', this._loseOrWinQuestionsService.idCompletedQuestId())
    this._resultQuestionsService.getSurveyFeedback(this._loseOrWinQuestionsService.idCompletedQuestId())
  }
}
