import { Component } from '@angular/core';

@Component({
  selector: 'app-line-light-gray',
  standalone: true,
  imports: [],
  templateUrl: './line-light-gray.component.html',
  styles: [
    `.line_light__gray {
      padding: 0;
      height: 0;
      border: none;
      border-top: 1px solid rgba(255, 255, 255, 0.40);
    }`
  ]
})
export class LineLightGrayComponent {

}
