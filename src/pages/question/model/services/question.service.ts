import {computed, inject, Injectable, Signal, signal} from '@angular/core';
import { AbstractApiService } from '../../../../shared/model/services/abstract-http.service';
import { API } from '../../../../shared/model/utils/api.endpoints';
import {
  GetSurveyForEditDto,
  ISurveySlugDto, optionsStorage,
  question, questionStorage,
  sendResultAnswer,
  SendResultSurvey,
  SendResultSurveyDto
} from '../../../../shared/model/types/surveys';
import {LoseOrWinQuestionsService} from "../../../../shared/model/services/lose-or-win-questions.service";
import {HttpClient} from "@angular/common/http";
import {RedirectToPageService} from "../../../../shared/model/services/redirect-to-page.service";
import {CreateSurveyService} from "../../../admin-panel/model/services/create-survey.service";

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private readonly apiService = inject(AbstractApiService)
  private _loseOrWinQuestionsService = inject(LoseOrWinQuestionsService)
  private _redirectService = inject(RedirectToPageService)
  private createSurveyService = inject(CreateSurveyService)

  // ______________________________________________________________________________________________________
  readonly #questions = signal<question[]>([]);
  public readonly currentQuestion:Signal<question | null> = computed(() => this.#questions()[this.#currentQuestionIndex()]);
  // ______________________________________________________________________________________________________

  readonly #currentQuestionIndex = signal<number>(0);
  public readonly  currentQuestionIndex = computed(() => this.#currentQuestionIndex())
  // ______________________________________________________________________________________________________
  public readonly totalCount = computed(() => this.#questions().length)
  // ______________________________________________________________________________________________________
  readonly #currentQuestionPage = signal<number>(1)
  public readonly currentQuestionPage = computed(() => this.#currentQuestionPage())
  // ______________________________________________________________________________________________________
  readonly #activeSlugId = signal<string>('')
  // ______________________________________________________________________________________________________
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
  getSurveyForEdit(id:string) {
    this.apiService.request<GetSurveyForEditDto>(API.GET_SURVEY_FOR_EDIT,undefined,{urlParams: id}).subscribe((r) => {
    this.createSurveyService.setSurvey({name: r.result.name, slug: r.result.slug})
      console.log('work', r)
      const questions: questionStorage[] = r.result.questions.map(q => ({
        surveyId: r.result.id,
        questionText: q.questionText,
        sequence: q.sequence,
        questionType: q.questionType,
        options: q.options.map<optionsStorage>(option => ({
          ...option,
          isCorrect: !!option.isCorrect,
          id: option.id
        })),
        showAnswers: true,
      }));
      console.log(r, 'qqqqq')
      console.log(questions, 'vvvvv')
      this.createSurveyService.setQuestionsOrAnswersStorage(questions)
    })
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
