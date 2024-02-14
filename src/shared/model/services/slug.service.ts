import {computed, Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class SlugService {
 readonly #actualSlug = signal<string>( '')
public  readonly actualSlug = computed(() => this.#actualSlug())
  set (slug:string) {
   this.#actualSlug.set(slug)
  }
}
