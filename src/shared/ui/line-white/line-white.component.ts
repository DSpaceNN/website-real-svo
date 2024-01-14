import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-line-white',
  standalone: true,
  imports: [],
  templateUrl: './line-white.component.html',
  styles: [
    `
    .line__white {
      padding: 0;
      height: 0;
      border: none;
      border-top: 1px solid #FFF;
    }`
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LineWhiteComponent {

}
