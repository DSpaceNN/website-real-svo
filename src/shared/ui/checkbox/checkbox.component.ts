import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
  ],
  template: `
    <h1>init checkbox</h1>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
  color =  '#FF2222'
data: string = '123'

}
