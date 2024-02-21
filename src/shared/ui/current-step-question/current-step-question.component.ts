import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'app-current-step-question',
  standalone: true,
  imports: [],
  template: `
 <div class="w-6 h-6 text-center bg-black-btn text-white rounded-[4px]">{{step()}}</div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentStepQuestionComponent {
step = input.required<number>()
}
