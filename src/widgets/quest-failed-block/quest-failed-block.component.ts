import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {ContainerNumberCardComponent} from "../../shared/ui/container-number-card/container-number-card.component";
import {TitleComponent} from "../../shared/ui/title/title.component";
import {LoseOrWinQuestionsService} from "../../shared/model/services/lose-or-win-questions.service";
import {SlugService} from "../../shared/model/services/slug.service";

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
  private _slugService = inject(SlugService)
  public readonly slug = this._slugService.actualSlug
}
