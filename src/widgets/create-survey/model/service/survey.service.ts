import {computed, inject, Injectable, Signal, signal} from '@angular/core';
import {AbstractApiService} from "../../../../shared/model/services/abstract-http.service";
import {API} from "../../../../shared/model/utils/api.endpoints";
import {
  CreateOrEditQuestionDto,
  IDeleteSurveyDto,
  ISurvey,
  ISurveyDto,
  question, questionStorage
} from "../../../../shared/model/types/surveys";
import {Sorting} from "../../../admin-results/model/types/survey-result";
import {ICreateSurvey} from "../../../../features/create-survey-form/model/types/create-survey-form.type";
import {CreateSurveyService} from "../../../../pages/admin-panel/model/services/create-survey.service";
import {HttpHeaders} from "@angular/common/http";
import {SurveyModalsService} from "../../../../pages/admin-panel/model/services/survey-modals.service";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private _createSurveyService = inject(CreateSurveyService)
  private _surveyModalService = inject(SurveyModalsService)
//   _________________________________________________________________________________________

  readonly #filterSurveyValue = signal<string>('')
  public readonly filterSurveyValue = computed(() => this.#filterSurveyValue())
//   _________________________________________________________________________________________
readonly #currentSurveyId = signal<string>('')
  public readonly  currentSurveyId = computed(() => this.#currentSurveyId())
//   _________________________________________________________________________________________

  readonly #skipCount = signal<number>(0)
  public readonly skipCount = computed(() => this.#skipCount())
//   _________________________________________________________________________________________

  readonly #takeCount = signal<number>(6)
  public readonly takeCount = computed(() => this.#takeCount())
//   _________________________________________________________________________________________

  readonly #surveys = signal<ISurvey[]>([])
  public readonly surveys = computed(() => this.#surveys())
//   _________________________________________________________________________________________
  readonly #totalCountSurveys = signal<number>(0);
  public readonly totalCountSurveys = computed(() => this.#totalCountSurveys())
//   _________________________________________________________________________________________
  readonly #sortingSurveyResult = signal<Sorting>({active: '',direction: ''})
  public readonly sortingSurveyResult = computed(() => this.#sortingSurveyResult())
//   _________________________________________________________________________________________
  apiService = inject(AbstractApiService)
//   _________________________________________________________________________________________
  readonly #currentPage = signal<number>(0)
  public readonly currentPage = computed(() => this.#currentPage())
//   _________________________________________________________________________________________
 public setCurrentPage(val:number) {
    this.#currentPage.set(val)
  }
//   _________________________________________________________________________________________
  setSortingValue(sortingValue:Sorting) {
    this.#sortingSurveyResult.set(sortingValue)
  }
//   _________________________________________________________________________________________
  setSurvey (requestBody:ICreateSurvey) {
    const headers = new HttpHeaders({'X-Interceptor-Create-Survey': 'true'});
    this.apiService.request<CreateOrEditQuestionDto>(API.CREATE_SURVEY,requestBody,undefined,headers).subscribe((res) => {
      this.#currentSurveyId.set(res.result)
      console.log(res,'hello2222')
      this.sendQuestions()
    })
  }
//   _________________________________________________________________________________________
  sendQuestions() {
    const id = this.currentSurveyId()
    const questionsToSend = this._createSurveyService.questionsOrAnswersStorage().map(storedQuestion => {
      const question: questionStorage = {
        surveyId:this.currentSurveyId(),
        id:storedQuestion.id,
        questionText: storedQuestion.questionText,
        sequence: storedQuestion.sequence,
        questionType: storedQuestion.questionType,
        options: storedQuestion.options.map(storedOption => ({
          optionText: storedOption.optionText,
          isCorrect: storedOption.isCorrect,
          ...id && { id }
        })),
      };
      return question;
    });
    for (let item of questionsToSend) {
      console.log(item,'item iiiii', this.currentSurveyId())
      this.createOrEditQuestion(item)
    }
    this._surveyModalService.openSuccessModal(this._createSurveyService.surveyStorage())
    this._createSurveyService.resetQuestionsValue()
  }
//   _________________________________________________________________________________________
  createOrEditQuestion(questions:questionStorage) {
    const headers = new HttpHeaders({'X-Interceptor-Create-Survey': 'true'});
    this.apiService.request<CreateOrEditQuestionDto>(API.CREATE_OR_EDIT_QUESTIONS,questions,undefined,headers ).subscribe((res) => {
      console.log('done createOrEditQuestion', res.result)

    })
  }
//   _________________________________________________________________________________________
  getSurvey() {
    const params = new URLSearchParams({
      ...{ Take: String(this.#takeCount()) },
      ...{ Skip: String(this.#skipCount()) },
      ...(this.#sortingSurveyResult().direction && { Sorting: String(`${this.#sortingSurveyResult().active} ${this.#sortingSurveyResult().direction}`)}),
      ...(this.filterSurveyValue().length && { Filter: String(this.filterSurveyValue())}),
    });

    this.apiService.request<ISurveyDto>(API.GET_SURVEY, undefined, { queryParams: params.toString() }).subscribe((survey) => {
      this.#surveys.set(survey.result.items)
      this.#totalCountSurveys.set(survey.result.totalCount)
    })
  }
//   _________________________________________________________________________________________
  deleteSurvey(userId: string) {
    this.apiService.request(API.DELETE_SURVEY, undefined,{urlParams: userId}).subscribe((survey) => {
      this.#surveys.update((survey) => survey.filter((v) => v.id !== userId ))
      this.#totalCountSurveys.update((v) => v - 1)
    })
  }
//   _________________________________________________________________________________________
  setFiler (val:string) {
    this.#filterSurveyValue.set(val)
  }

  setSkipCount (skipCount:number) {
    this.#skipCount.set(skipCount)
  }
  setTakeCount(takeCount:number) {
    this.#takeCount.set(takeCount)
  }
  setCurrentIdSurvey(id:string) {
    this.#currentSurveyId.set(id)
  }
}
