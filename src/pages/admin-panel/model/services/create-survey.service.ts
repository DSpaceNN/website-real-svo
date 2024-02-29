import {computed, inject, Injectable, signal} from '@angular/core';
import {ICreateSurvey} from "../../../../features/create-survey-form/model/types/create-survey-form.type";
import {question, questionStorage} from "../../../../shared/model/types/surveys";
import {randQuestion} from "../utils/factory-questions-answers";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {AbstractApiService} from "../../../../shared/model/services/abstract-http.service";

@Injectable({
  providedIn: 'root'
})
export class CreateSurveyService {
  // _________________________________________________________________________________________________________
  readonly #surveyStorage = signal<ICreateSurvey>({name: '', slug: ''})
  public readonly surveyStorage = computed(() => this.#surveyStorage())
  // ________________________________________________________________________________________________________
  readonly #questionsOrAnswersStorage = signal<questionStorage[]>([
    randQuestion(),
    randQuestion(),
    randQuestion(),
    randQuestion(),
    randQuestion(),
  ])
  // ________________________________________________________________________________________________________
private _apiService = inject(AbstractApiService)

  // ________________________________________________________________________________________________________

  public readonly questionsOrAnswersStorage = computed(() => this.#questionsOrAnswersStorage())
  // ________________________________________________________________________________________________________

  public updateQuestionText(sequence: number, questionText: string): void {
    const question = this.#questionsOrAnswersStorage().find(q => q.sequence === sequence);
    if (question) {
      question.questionText = questionText;
    }
  }
  // ________________________________________________________________________________________________________
  public updateAnswerText(sequence: number,optionId: number,answerText: string): void {
    const question = this.#questionsOrAnswersStorage().find(q => q.sequence === sequence);
    if (question) {
      const option = question.options.find(o => o.id === optionId);
      if (option) {
        option.optionText = answerText;
      }
    }
  }
  // ________________________________________________________________________________________________________

  public selectAnswer(sequence: number, optionId: number): void {
    const question = this.#questionsOrAnswersStorage().find(q => q.sequence === sequence);
    if (question) {
      question.options.forEach(option => {
        option.isCorrect = option.id === optionId;
      });
    }
  }
  // ________________________________________________________________________________________________________

 public setSurvey(survey:ICreateSurvey) {
    this.#surveyStorage.set(survey)
  }
  // ________________________________________________________________________________________________________

  toggleShowAnswers(sequence: number): void {
    const question = this.#questionsOrAnswersStorage().find(q => q.sequence === sequence);
    if (question) {
      question.showAnswers = !question.showAnswers;
    }
  }
  // ________________________________________________________________________________________________________

}
