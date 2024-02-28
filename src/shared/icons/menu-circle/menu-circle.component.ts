import {Component, input} from '@angular/core';

@Component({
  selector: 'app-menu-circle',
  standalone: true,
  imports: [],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <circle cx="5" cy="5" r="5" [style.fill]="fill()"/>
    </svg>
  `,
  styles: ``
})
export class MenuCircleComponent {
  fill = input.required<string>({
    alias: 'fill-svg'
  })

}
