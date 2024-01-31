import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import {TitleComponent} from "../../shared/ui/title/title.component";

@Component({
  selector: 'app-correctness-answer',
  standalone: true,
  imports: [
    TitleComponent
  ],

  template: `
        <div class="w-full flex justify-center relative" >
          <div class="w-full h-full absolute rounded-[305px]" [class]="bgColor()"></div>
            <app-title class=" my-5 z-10">{{title}}</app-title>
        </div>
  `,
  styles: `
    .bad_answer {
      background: radial-gradient(50% 50% at 50% 50%, rgba(255, 34, 34, 0.70) 0%, rgba(255, 34, 34, 0.00) 100%);
      filter: blur(11px);
    }
    .confirm_answer {
      background: radial-gradient(50% 50% at 50% 50%, rgba(0, 171, 17, 0.70) 0%, rgba(0, 171, 17, 0.00) 100%);
      filter: blur(11px);

    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CorrectnessAnswerComponent {
  private _title:string = ''

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

 readonly  #bgColor = signal<string | null>(null)
  public readonly bgColor = computed(() => this.#bgColor())

  correctAnswer = input.required<void,boolean>({
   transform: (v:boolean) => {
     if(v) {
       this.title = 'верно'
       this.#bgColor.set('confirm_answer')
     }
     else {
       this.title = 'не верно'
       this.#bgColor.set('bad_answer')
     }

   }
 })
}
