import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-red-background',
  standalone: true,
  imports: [],
  templateUrl: './red-background.component.html',
  styles: [
    `
      .red_background {
        width: 100%;
        height: 100%;
        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 34, 34, 0.80) 0%, rgba(255, 34, 34, 0.00) 100%);
        filter: blur(18px);
      }
    `
  ],
  host: {
    class: 'red_background'
  },
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RedBackgroundComponent {

}
