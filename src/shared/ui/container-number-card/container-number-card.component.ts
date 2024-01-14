import {Component, ContentChild, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-container-number-card',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './container-number-card.component.html',
  styles: [
    `
      .card_number {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.10);
        width: 100%;
        height: 100%;
      }
    `
  ],
  host: {
    class: 'block'
  }
})
export class ContainerNumberCardComponent<T> {
@ContentChild("numberCard", {read: TemplateRef})number_card!:TemplateRef<T>
}
