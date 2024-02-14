import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoseOrWinQuestionsService {
  readonly #uniqueCode = signal<string>('Не определен')
  public readonly uniqueCode = computed(() => this.#uniqueCode())

  readonly #idCompletedQuestId = signal<string>('')
  public readonly idCompletedQuestId = computed(() => this.#idCompletedQuestId())
  constructor() { }

  setUniqueCode (code:string) {
    this.#uniqueCode.set(code)
  }
  setIdCompletedQuestions (id:string) {
    this.#idCompletedQuestId.set(id)
  }
}
