import {computed, Injectable, signal} from '@angular/core';
import {ICreateSurvey} from "../../../../features/create-survey-form/model/types/create-survey-form.type";
import {question, questionStorage} from "../../../../shared/model/types/surveys";

@Injectable({
  providedIn: 'root'
})
export class CreateSurveyService {
  // _________________________________________________________________________________________________________
  readonly #surveyStorage = signal<ICreateSurvey>({name: '', slug: ''})
  public readonly surveyStorage = computed(() => this.#surveyStorage())
  // ________________________________________________________________________________________________________
  readonly #questionsOrAnswersStorage = signal<questionStorage[]>([
    {
      questionText: '',
      questionType: 0,
      options: [
        {
          id:1,
          optionText: '',
          isCorrect: false

        },
        {
          id:2,
          optionText: '',
          isCorrect: false

        },
        {
          id:3,
          optionText: '',
          isCorrect: false

        }
      ],
      sequence:1,
      showAnswers:true

    },
    {
      questionText: '',
      questionType: 0,
      options: [
        {
          id:4,
          optionText: '',
          isCorrect: false

        },
        {
          id:5,
          optionText: '',
          isCorrect: false

        },
        {
          id:6,
          optionText: '',
          isCorrect: false

        }
      ],
      sequence:2,
      showAnswers:false

    },
    {
      questionText: '',
      questionType: 0,
      options: [
        {
          id:7,
          optionText: '',
          isCorrect: false

        },
        {
          id:8,
          optionText: '',
          isCorrect: false

        },
        {
          id:9,
          optionText: '',
          isCorrect: false

        }
      ],
      sequence:3,
      showAnswers:false

    },
    {
      questionText: '',
      questionType: 0,
      options: [
        {
          id:10,
          optionText: '',
          isCorrect: false

        },
        {
          id:11,
          optionText: '',
          isCorrect: false

        },
        {
          id:12,
          optionText: '',
          isCorrect: false

        }
      ],
      sequence:4,
      showAnswers:false

    },
    {
      questionText: '',
      questionType: 0,
      options: [
        {
          id:13,
          optionText: '',
          isCorrect: false

        },
        {
          id:14,
          optionText: '',
          isCorrect: false

        },
        {
          id:15,
          optionText: '',
          isCorrect: false

        }
      ],
      sequence:5,
      showAnswers:false
    }
  ])
  public readonly questionsOrAnswersStorage = computed(() => this.#questionsOrAnswersStorage())

  public updateQuestionText(sequence: number, questionText: string): void {
    const question = this.#questionsOrAnswersStorage().find(q => q.sequence === sequence);
    if (question) {
      question.questionText = questionText;
    }
  }
  public updateAnswerText(sequence: number,optionId: number,answerText: string): void {
    const question = this.#questionsOrAnswersStorage().find(q => q.sequence === sequence);
    if (question) {
      const option = question.options.find(o => o.id === optionId);
      if (option) {
        option.optionText = answerText;
      }
    }
  }
  public selectAnswer(sequence: number, optionId: number): void {
    const question = this.#questionsOrAnswersStorage().find(q => q.sequence === sequence);
    if (question) {
      question.options.forEach(option => {
        option.isCorrect = option.id === optionId;
      });
    }
  }

 public setSurvey(survey:ICreateSurvey) {
    this.#surveyStorage.set(survey)
  }
  toggleShowAnswers(sequence: number): void {
    const question = this.#questionsOrAnswersStorage().find(q => q.sequence === sequence);
    if (question) {
      question.showAnswers = !question.showAnswers;
    }
  }
}
