import { Component } from '@angular/core';
import {TitleAndUnderlineComponent} from "../../features/title-and-underline/title-and-underline.component";
import {QuestionCartComponent} from "../../features/question-cart/question-cart.component";

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [
    TitleAndUnderlineComponent,
    QuestionCartComponent
  ],
  templateUrl: './sub-header.component.html',
})
export class SubHeaderComponent {

}
