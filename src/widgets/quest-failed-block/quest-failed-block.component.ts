import {ChangeDetectionStrategy, Component, Signal} from '@angular/core';
import {TitleComponent} from "../../shared/title/title.component";
import {DescriptionComponent} from "../../shared/description/description.component";
import {ContainerNumberCardComponent} from "../../shared/container-number-card/container-number-card.component";
import {UniqueCodeService} from "../../features/question-cart/model/unique-code.service";

@Component({
  selector: 'app-quest-failed-block',
  standalone: true,
  imports: [
    TitleComponent,
    DescriptionComponent,
    ContainerNumberCardComponent
  ],
  templateUrl: './quest-failed-block.component.html',
  styleUrl: './quest-failed-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestFailedBlockComponent {
  public uniqueCode:Signal<number> = this._uniqueCodeService.numberCart
  constructor(private _uniqueCodeService:UniqueCodeService) {
  }
}
