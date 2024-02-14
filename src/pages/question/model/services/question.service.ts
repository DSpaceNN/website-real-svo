import { computed, inject, Injectable, signal } from '@angular/core';
import { AbstractApiService } from '../../../../shared/model/services/abstract-http.service';
import { API } from '../../../../shared/model/utils/api.endpoints';
import {
  ISurveySlugDto,
  question,
  sendResultAnswer,
  SendResultSurvey,
  SendResultSurveyDto
} from '../../../../shared/model/types/surveys';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private readonly apiService = inject(AbstractApiService)
  readonly #questions = signal<question[]>([]);
  readonly #currentQuestionIndex = signal<number>(0);
  public readonly  currentQuestionIndex = computed(() => this.#currentQuestionIndex())
  public readonly currentQuestion = computed(() => this.#questions()[this.#currentQuestionIndex()]);
  public readonly totalCount = computed(() => this.#questions().length)
  readonly #currentQuestionPage = signal<number>(1)
  public readonly currentQuestionPage = computed(() => this.#currentQuestionPage())
  readonly #activeSlugId = signal<string>('')
  getSurveySlug(slug: string) {
    this.apiService
      .request<ISurveySlugDto>(API.GET_SURVEY_BY_SLUG, undefined, { urlParams: slug })
      .subscribe((response) => {
        this.#questions.set(response.result.questions);
        this.#activeSlugId.set(response.result.id)
        this.#currentQuestionIndex.set(0);
      });
  }
sendResultQuestion (postData:SendResultSurvey) {
      this.apiService.request<SendResultSurveyDto>(API.CREATE_SEND_RESULT, postData).subscribe((r) => {
        console.log(r)
      })
}
  selectOption(selectedOptionId: string) {
    const currentQuestionIndex = this.#currentQuestionIndex();
    const questions = this.#questions();
    const currentQuestion = questions[currentQuestionIndex];
    const currentSelectedOption = currentQuestion.options.find(option => option.isSelected);
    if (currentSelectedOption) {
      currentSelectedOption.isSelected = false;
    }
    const selectedOption = currentQuestion.options.find(opt => opt.id === selectedOptionId);
    if (selectedOption) {
      selectedOption.isSelected = true;
    }
  }
  next() {
    this.#currentQuestionPage.update((v) => {
      return v < this.totalCount() ? v + 1 : v
    })
    const currentQuestionIndex = this.#currentQuestionIndex();
    const questions = this.#questions();
    console.log(questions)
    if (currentQuestionIndex < questions.length - 1) {
      this.#currentQuestionIndex.set(currentQuestionIndex + 1);
    } else {
      const postData:sendResultAnswer[] = questions.map(question => {
        return {
          questionId: question.id,
          selectedOptions: question.options.filter(option => option.isSelected).map(option => option.id)
        }
      });

      const finalPostData: SendResultSurvey = {
        surveyId: this.#activeSlugId(),
        answers: postData
      };

      this.sendResultQuestion(finalPostData);
      console.log(finalPostData)
    }
  }
  previous() {
    console.log(this.#questions().map((i) => {
      console.log(i, 'h')
    }))
    const currentQuestionIndex = this.#currentQuestionIndex();
    this.#currentQuestionPage.update((v) => v = v - 1)
    if (currentQuestionIndex > 0) {
      this.#currentQuestionIndex.set(currentQuestionIndex - 1);
    } else {
      console.log("This is the first question.")
    }
  }
}
