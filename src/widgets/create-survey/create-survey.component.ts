import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create-survey',
  standalone: true,
  imports: [],
  template: `
    <p class="text-white">
      create-survey works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CreateSurveyComponent {

}
