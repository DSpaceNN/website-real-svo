import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniqueCodeService {
 #numberCart = signal<number>(32)
  public numberCart = computed(this.#numberCart)
  constructor() { }
set (value:number) {
   this.#numberCart.set(value)
}

}
