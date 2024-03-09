import {Component, computed, input, signal} from '@angular/core';
import {SurveyResultAnswers, SurveyResultDropdownSlug} from "../../widgets/admin-results/model/types/survey-result";
import {MenuCircleComponent} from "../../shared/icons/menu-circle/menu-circle.component";

@Component({
  selector: 'app-admin-result-dropdown',
  standalone: true,
  imports: [
    MenuCircleComponent
  ],
  template: `
  <div class="flex flex-col gap-1">
    <div class="flex gap-1">
        <h2>{{answers().title}}</h2>
      <svg [style.transform]="openAnswersStatus() ? 'rotate(0)' : 'rotate(180deg)'" (click)="changeStatus()" xmlns="http://www.w3.org/2000/svg" cursor="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_302_183" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_302_183)">
          <path d="M12 10.8004L8.10005 14.7004C7.91672 14.8837 7.68338 14.9754 7.40005 14.9754C7.11672 14.9754 6.88338 14.8837 6.70005 14.7004C6.51672 14.5171 6.42505 14.2837 6.42505 14.0004C6.42505 13.7171 6.51672 13.4837 6.70005 13.3004L11.3 8.70039C11.5 8.50039 11.7334 8.40039 12 8.40039C12.2667 8.40039 12.5 8.50039 12.7 8.70039L17.3 13.3004C17.4834 13.4837 17.575 13.7171 17.575 14.0004C17.575 14.2837 17.4834 14.5171 17.3 14.7004C17.1167 14.8837 16.8834 14.9754 16.6 14.9754C16.3167 14.9754 16.0834 14.8837 15.9 14.7004L12 10.8004Z" fill="#161616"/>
        </g>
      </svg>
</div>
    @if (openAnswersStatus()) {
    <div>
      @for (item of answers().answers;track item.id) {
     <div class="flex items-center gap-1">
     <app-menu-circle [fill-svg]="item.isCorrect ? '#B4D5A4' : '#F09191'"></app-menu-circle>
       <h2 class="text-[18px] text-gray-admin"> {{item.sequence}} вопрос — {{item.isCorrect ? 'Верный' : 'Неверный'}} </h2>
     </div>
      }
    </div>
    }
  </div>
  `,
  styles: ``
})
export class AdminResultDropdownComponent {
  readonly #openAnswersStatus = signal<boolean>(false)
  public readonly openAnswersStatus = computed(() => this.#openAnswersStatus())
  changeStatus() {
    this.#openAnswersStatus.update((s)=> !s)
  }
answers = input.required<SurveyResultDropdownSlug>()
}
