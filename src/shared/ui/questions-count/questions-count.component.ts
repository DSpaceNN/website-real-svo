import {Component, inject} from '@angular/core';
import {TitleComponent} from "../title/title.component";
import {QuestionService} from "../../../pages/question/model/services/question.service";

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
  private _questionService = inject(QuestionService)
  public readonly currentPage = this._questionService.currentQuestionPage
  public readonly questionCount = this._questionService.totalCount
}
