import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-button-go-main-page',
  standalone: true,
  imports: [
    ButtonEventComponent,
    DescriptionComponent,
    RouterLink
  ],
  template: `
    <div class="fixed-bottom-container">
    <app-button-event  routerLink="/" >
      <div class="my-3 flex flex- gap-1 justify-center items-center">
        <app-description class="block">Вернуться на главную
        </app-description>
        <img src="../../assets/images/arrow_outward.svg" alt="arrow">
      </div>
    </app-button-event>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonGoMainPageComponent {

}
