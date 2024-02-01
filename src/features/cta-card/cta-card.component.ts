import {ChangeDetectionStrategy, Component, Inject, input, Input} from '@angular/core';
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {Router, RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {RedBackgroundComponent} from "../../shared/ui/red-background/red-background.component";
import {CtaCardWrapperComponent} from "../cta-card-wrapper/cta-card-wrapper.component";

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
  back = input.required<string>({
    alias: 'backUrl'
  })
  forward = input.required<string>({
    alias: 'forwardUrl'

  })
 private _router:Router = Inject(Router)
}
