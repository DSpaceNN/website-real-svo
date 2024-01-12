import { Component } from '@angular/core';
import {TitleComponent} from "../../shared/title/title.component";
import {ContainerNumberCardComponent} from "../../shared/container-number-card/container-number-card.component";
import {LineWhiteComponent} from "../../shared/line/ui/line-white/line-white.component";
import {UniqueNumberCartComponent} from "../../shared/unique-number-cart/unique-number-cart.component";
import {QuestionsCountComponent} from "../../shared/questions-count/questions-count.component";

@Component({
  selector: 'app-question-cart',
  standalone: true,
  imports: [
    TitleComponent,
    LineWhiteComponent,
    UniqueNumberCartComponent,
    QuestionsCountComponent
  ],
  templateUrl: './question-cart.component.html',
  styleUrl: './question-cart.component.scss'
})
export class QuestionCartComponent {

}
