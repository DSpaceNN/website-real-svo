import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TitleComponent} from "../../shared/ui/title/title.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {CircleAnimationComponent} from "../../shared/ui/circle-animation/circle-animation.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    TitleComponent,
    ButtonEventComponent,
    DescriptionComponent,
    RouterLink,
    CircleAnimationComponent,
  ],
  template: `
    <app-title class=" text-[24px] md:text-[26px] text-left mx-auto md:mx-0"> Страница <br class="md:hidden"> не <br class="md:hidden"> найдена...</app-title>
<div class="fixed-bottom-container">
  <app-button-event  routerLink="/" >
    <div class="my-3 flex flex- gap-1 justify-center items-center">
      <app-description class="block">Вернуться на главную
      </app-description>
      <img src="../../assets/images/arrow_outward.svg" alt="arrow">
    </div>
  </app-button-event>
  <app-circle-animation></app-circle-animation>
</div>

  `,
host: {
    class: 'flex gap-4 flex-col justify-center w-full mt-5 '
},
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class NotFoundComponent {

}
