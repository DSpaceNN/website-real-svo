import {Component, Signal} from '@angular/core';
import {TitleComponent} from "../../shared/title/title.component";
import {ContainerNumberCardComponent} from "../../shared/container-number-card/container-number-card.component";
import {LineWhiteComponent} from "../../shared/line/ui/line-white/line-white.component";
import {QuestionsCountComponent} from "../../shared/questions-count/questions-count.component";
import {UniqueCodeService} from "./model/unique-code.service";

@Component({
  selector: 'app-question-cart',
  standalone: true,
  imports: [
    TitleComponent,
    LineWhiteComponent,
    QuestionsCountComponent,
    ContainerNumberCardComponent
  ],
  templateUrl: './question-cart.component.html',
  styleUrl: './question-cart.component.scss'
})
export class QuestionCartComponent {
  public uniqueCode:Signal<number> = this._uniqueCodeService.numberCart
  constructor(private _uniqueCodeService:UniqueCodeService) {
  }
}
