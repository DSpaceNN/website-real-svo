import {ChangeDetectionStrategy, Component, Signal} from '@angular/core';
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {ContainerNumberCardComponent} from "../../shared/ui/container-number-card/container-number-card.component";
import {UniqueCodeService} from "../../shared/model/unique-code.service";
import {TitleComponent} from "../../shared/ui/title/title.component";

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
