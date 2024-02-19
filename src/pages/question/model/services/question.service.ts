import {computed, inject, Injectable, Signal, signal} from '@angular/core';
import { AbstractApiService } from '../../../../shared/model/services/abstract-http.service';
import { API } from '../../../../shared/model/utils/api.endpoints';
import {
  ISurveySlugDto,
  question,
  sendResultAnswer,
  SendResultSurvey,
  SendResultSurveyDto
} from '../../../../shared/model/types/surveys';
import {LoseOrWinQuestionsService} from "../../../../shared/model/services/lose-or-win-questions.service";
import {HttpClient} from "@angular/common/http";
import {RedirectToPageService} from "../../../../shared/model/services/redirect-to-page.service";

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private readonly apiService = inject(AbstractApiService)
  private _loseOrWinQuestionsService = inject(LoseOrWinQuestionsService)
  private _redirectService = inject(RedirectToPageService)
  // ______________________________________________________________________________________________________
  readonly #questions = signal<question[]>([]);
  readonly #currentQuestionIndex = signal<number>(0);
  public readonly  currentQuestionIndex = computed(() => this.#currentQuestionIndex())
  public readonly currentQuestion:Signal<question | null> = computed(() => this.#questions()[this.#currentQuestionIndex()]);
  public readonly totalCount = computed(() => this.#questions().length)
  readonly #currentQuestionPage = signal<number>(1)
  public readonly currentQuestionPage = computed(() => this.#currentQuestionPage())
  readonly #activeSlugId = signal<string>('')
  getSurveySlug(slug: string) {
    this.apiService
      .request<ISurveySlugDto>(API.GET_SURVEY_BY_SLUG, undefined, { urlParams: slug })
      .subscribe((response) => {
        this.#questions.set(response.result?.questions);
        this.#activeSlugId.set(response.result?.id)
        this.#currentQuestionIndex.set(0);
        if(!response.result) {
          this._redirectService.redirectToCartNotFoundPage()
        }
      });
  }
sendResultQuestion (postData:SendResultSurvey) {
      this.apiService.request<SendResultSurveyDto>(API.CREATE_SEND_RESULT, postData).subscribe((r) => {
        this._loseOrWinQuestionsService.setIdCompletedQuestions(r.result.id)
        this._loseOrWinQuestionsService.setUniqueCode(r.result.code)
        r.result.isSuccess ? this._redirectService.redirectToWinPage() : this._redirectService.redirectToPageNotThisTime()
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
  sendResultPassingSurvey () {
    const postData:sendResultAnswer[] = this.#questions().map(question => {
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
  }

  next() {
    this.#currentQuestionPage.update((v) => {
      return v < this.totalCount() ? v + 1 : v
    })
    const currentQuestionIndex = this.#currentQuestionIndex();
    const questions = this.#questions();
    if (currentQuestionIndex < questions.length - 1) {
      this.#currentQuestionIndex.set(currentQuestionIndex + 1);
    } else {
     this.sendResultPassingSurvey()
    }
  }
  previous() {
    const currentQuestionIndex = this.#currentQuestionIndex();
    this.#currentQuestionPage.update((v) => v = v - 1)
    if (currentQuestionIndex > 0) {
      this.#currentQuestionIndex.set(currentQuestionIndex - 1);
    } else {
    }
  }
  resetCurrentPage() {
    this.#currentQuestionPage.set(1)
  }
}
