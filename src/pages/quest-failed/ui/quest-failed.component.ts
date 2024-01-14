import {ChangeDetectionStrategy, Component, Signal} from '@angular/core';
import {QuestFailedBlockComponent} from "../../../widgets/quest-failed-block/quest-failed-block.component";
import {ButtonEventComponent} from "../../../shared/button-event/ui/button-event.component";
import {DescriptionComponent} from "../../../shared/description/description.component";
import {RedBackgroundComponent} from "../../../shared/red-background/red-background.component";

@Component({
  selector: 'app-quest-failed',
  standalone: true,
  imports: [
    QuestFailedBlockComponent,
    ButtonEventComponent,
    DescriptionComponent,
    RedBackgroundComponent
  ],
  templateUrl: './quest-failed.component.html',
  styleUrl: './quest-failed.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class QuestFailedComponent {


}
