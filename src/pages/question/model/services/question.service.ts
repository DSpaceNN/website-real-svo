import { computed, inject, Injectable, signal } from '@angular/core';
import { AbstractApiService } from '../../../../shared/model/services/abstract-http.service';
import { API } from '../../../../shared/model/utils/api.endpoints';
import { ISurveySlugDto, question } from '../../../../shared/model/types/surveys';

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
  getSurveySlug(slug: string) {
    this.apiService
      .request<ISurveySlugDto>(API.GET_SURVEY_BY_SLUG, undefined, { urlParams: slug })
      .subscribe((response) => {
        this.#questions.set(response.result.questions);
        this.#currentQuestionIndex.set(0);
      });
  }

  next() {
    const currentQuestionIndex = this.#currentQuestionIndex();
    const questions = this.#questions();
    console.log(this.currentQuestion())
    if (currentQuestionIndex < questions.length - 1) {
      this.#currentQuestionIndex.set(currentQuestionIndex + 1);
    } else {
      console.log("This is the last question.")
    }
  }

  previous() {
    const currentQuestionIndex = this.#currentQuestionIndex();

    if (currentQuestionIndex > 0) {
      this.#currentQuestionIndex.set(currentQuestionIndex - 1);
    } else {
      console.log("This is the first question.")
    }
  }
}
