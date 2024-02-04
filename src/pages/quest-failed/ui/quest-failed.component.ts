import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {QuestFailedBlockComponent} from "../../../widgets/quest-failed-block/quest-failed-block.component";
import {ButtonEventComponent} from "../../../shared/ui/button-event/button-event.component";
import {DescriptionComponent} from "../../../shared/ui/description/description.component";
import {RedBackgroundComponent} from "../../../shared/ui/red-background/red-background.component";
import {Router} from "@angular/router";
import {CircleAnimationComponent} from "../../../shared/ui/circle-animation/circle-animation.component";

@Component({
  selector: 'app-quest-failed',
  standalone: true,
  imports: [
    QuestFailedBlockComponent,
    ButtonEventComponent,
    DescriptionComponent,
    RedBackgroundComponent,
    CircleAnimationComponent
  ],
  templateUrl: './quest-failed.component.html',
  styleUrl: './quest-failed.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export default class QuestFailedComponent {
  private _router = inject(Router)
  redirectToResultPage() {
    this._router.navigate(['questions/result'])}
}
