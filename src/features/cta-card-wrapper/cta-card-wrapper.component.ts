import {ChangeDetectionStrategy, Component, ContentChild, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";
import {RedBackgroundComponent} from "../../shared/ui/red-background/red-background.component";

@Component({
  selector: 'app-cta-card-wrapper',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    RedBackgroundComponent
  ],
  template: `
    <section class="cta_card__container">
      <ng-template [ngTemplateOutlet]="cta"></ng-template>
      <app-red-background class="cta_card__circle">
      </app-red-background>
    </section>
  `,
  styles: `
    .cta_card__container {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: space-around;
      gap: 12px;
      background: rgba(36, 38, 46, 0.10);
      backdrop-filter: blur(6.5px);
      overflow: hidden;
      padding: 16px;
    }
    .cta_card__circle {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: -2rem;
      filter: blur(30px);

    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaCardWrapperComponent {
@ContentChild("ctaCard", {read: TemplateRef}) cta!:TemplateRef<unknown>
}
