import {Component, inject, Signal} from '@angular/core';
import {ContainerNumberCardComponent} from "../../shared/ui/container-number-card/container-number-card.component";
import {LineWhiteComponent} from "../../shared/ui/line-white/line-white.component";
import {UniqueCodeService} from "../../shared/model/services/unique-code.service";
import {TitleComponent} from "../../shared/ui/title/title.component";
import {QuestionsCountComponent} from "../../shared/ui/questions-count/questions-count.component";
import {SlugService} from "../../shared/model/services/slug.service";

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
private _slugService = inject(SlugService)
  public readonly slug = this._slugService.actualSlug
}
