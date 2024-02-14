import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TitleComponent} from "../../shared/ui/title/title.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {RedBackgroundComponent} from "../../shared/ui/red-background/red-background.component";
import {CircleAnimationComponent} from "../../shared/ui/circle-animation/circle-animation.component";
import {ButtonGoMainPageComponent} from "../../features/button-go-main-page/button-go-main-page.component";

@Component({
  selector: 'app-cart-not-found',
  standalone: true,
  imports: [
    TitleComponent,
    DescriptionComponent,
    RedBackgroundComponent,
    CircleAnimationComponent,
    ButtonGoMainPageComponent
  ],
  template: `
   <section class="flex flex-col gap-5 mt-5 justify-center w-full ">
     <app-title class="text-[24px]">Карточка не найдена...</app-title>
     <app-description class="text-white" >Пожалуйста, обновите QR-код на устройстве в музеи и отсканируйте его.</app-description>
     <app-description  class="text-white">Если вы столкнетесь с проблемой повторно, воспользуйтесь физическими карточками в картотеке музея.</app-description>
     <app-circle-animation></app-circle-animation>
     <app-button-go-main-page></app-button-go-main-page>
   </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CartNotFoundComponent {

}
