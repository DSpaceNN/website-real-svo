import {computed, inject, Injectable, signal} from '@angular/core';
import {ICreateSurvey} from "../../../../features/create-survey-form/model/types/create-survey-form.type";
import {question, questionStorage} from "../../../../shared/model/types/surveys";
import {createIncrementalNumber, randQuestion} from "../utils/factory-questions-answers";
import {randOption} from "../utils/factory-questions-answers"
import {AbstractApiService} from "../../../../shared/model/services/abstract-http.service";
import {SurveyService} from "../../../../widgets/create-survey/model/service/survey.service";

@Injectable({
  providedIn: 'root'
})
export class CreateSurveyService {
  readonly #questionsToDelete = signal<string[]>([])
  public readonly questionsToDelete = computed(() => this.#questionsToDelete())
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
setQuestionsOrAnswersStorage (arg:questionStorage[]) {
    this.#questionsOrAnswersStorage.set(arg)
}
  resetQuestionsValue () {
    const newQuestionSequence = createIncrementalNumber(0);
    this.#questionsOrAnswersStorage.set([
      randQuestion(newQuestionSequence()),
      randQuestion(newQuestionSequence()),
      randQuestion(newQuestionSequence()),
      randQuestion(newQuestionSequence()),
      randQuestion(newQuestionSequence())
    ])
  }
  addedNewQuestionOrAnswerItem () {
    const currentLength = this.questionsOrAnswersStorage().length;
    this.#questionsOrAnswersStorage.update((s) => [...s, randQuestion(currentLength + 1)]);
  }
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
  public updateAnswerText(sequence: number,optionId: string,answerText: string): void {
    const question = this.#questionsOrAnswersStorage().find(q => q.sequence === sequence);
    if (question) {
      const option = question.options.find(o => o.id === optionId);
      if (option) {
        option.optionText = answerText;
      }
    }
  }
  // ________________________________________________________________________________________________________

  public selectAnswer(sequence: number, optionId: string): void {
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
  public resetSurvey () {
    this.#surveyStorage.set({name: '',slug: ''})
  }

  // ________________________________________________________________________________________________________

  toggleShowAnswers(sequence: number): void {
    const question = this.#questionsOrAnswersStorage().find(q => q.sequence === sequence);
    if (question) {
      question.showAnswers = !question.showAnswers;
    }
  }
  // ________________________________________________________________________________________________________
  deleteQuestionAndAnswerSequence(sequence: number, isEdit?:boolean) {
    const questions = this.questionsOrAnswersStorage().slice();
    const newQuestions = questions.filter(item => item.sequence !== sequence);
    const deletedQuestion = questions.find(item => item.sequence === sequence);
    if (isEdit && deletedQuestion && deletedQuestion.id) {
      const currentQuestionsToDelete = this.questionsToDelete();
      const idToDelete = deletedQuestion.id;
      this.#questionsToDelete.update((v) => [...v, idToDelete]);
    }
    console.log(this.#questionsToDelete())
      newQuestions.forEach((item, index) => {
        item.sequence = index + 1;
      });

    this.#questionsOrAnswersStorage.set(newQuestions);
  }
  // ________________________________________________________________________________________________________

  deleteAnswer(questionSequence: number, answerId: string) {
    const questions = this.questionsOrAnswersStorage().slice();
    const question = questions.find(q => q.sequence === questionSequence);
    if (question) {
      question.options = question.options.filter(option => option.id !== answerId);
      this.#questionsOrAnswersStorage.set(questions);
    }
      console.log(questions, 'questions or delete')
  }
  // ________________________________________________________________________________________________________

  addedAnswer(questionSequence: number) {
    const questions = this.questionsOrAnswersStorage().slice();
    const question = questions.find((q) => q.sequence === questionSequence);
    if(question) {
      question.options = [...question.options, randOption()];
      this.#questionsOrAnswersStorage.set(questions);
    }
  }
  // ________________________________________________________________________________________________________
  resetDeletedQuestionId() {
    this.#questionsToDelete.set([])
  }
}
