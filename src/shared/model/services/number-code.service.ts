import {computed, Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class NumberCodeService {
 readonly #numberCode = signal<number | null>(null)
  readonly numberCode = computed(() => this.#numberCode())

  set (arg:number) {
   this.#numberCode.set(arg)
  }
}
