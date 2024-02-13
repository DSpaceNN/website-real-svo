import {computed, Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class SlugService {
 readonly #actualSlug = signal<string | null>(null)
public  readonly actualSlug = computed(() => this.#actualSlug())
  set (slug:string | null) {
   this.#actualSlug.set(slug)
  }
}
