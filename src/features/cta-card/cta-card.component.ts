import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {Router, RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {RedBackgroundComponent} from "../../shared/ui/red-background/red-background.component";

@Component({
  selector: 'app-cta-card',
  standalone: true,
  imports: [
    ButtonEventComponent,
    RouterLink,
    RedBackgroundComponent,
    NgClass,
  ],
  templateUrl: './cta-card.component.html',
  styleUrl: './cta-card.component.scss',
  host: {
    class: ''
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaCardComponent {
@Input()backUrl: string = '';
@Input()forwardUrl: string = ''
 private _router:Router = Inject(Router)
}
