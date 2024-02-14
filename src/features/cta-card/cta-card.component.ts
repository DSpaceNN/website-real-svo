import {ChangeDetectionStrategy, Component, inject, Inject, input, Input} from '@angular/core';
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {Router, RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {RedBackgroundComponent} from "../../shared/ui/red-background/red-background.component";
import {CtaCardWrapperComponent} from "../cta-card-wrapper/cta-card-wrapper.component";
import {SlugService} from "../../shared/model/services/slug.service";

@Component({
  selector: 'app-cta-card',
  standalone: true,
  imports: [
    ButtonEventComponent,
    RouterLink,
    RedBackgroundComponent,
    NgClass,
    CtaCardWrapperComponent,
  ],
  templateUrl: './cta-card.component.html',
  styleUrl: './cta-card.component.scss',
  host: {
    class: ''
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaCardComponent {
  private _router = inject(Router)
  private _slugService = inject(SlugService)
  goToRepeatPassingQuest() {
    this._router.navigate(['/questions'], {
      queryParams: {
        slug: this._slugService.actualSlug()
      }
    })
  }
}
