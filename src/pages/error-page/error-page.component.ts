import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TitleComponent} from "../../shared/ui/title/title.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {CircleAnimationComponent} from "../../shared/ui/circle-animation/circle-animation.component";
import {ButtonGoMainPageComponent} from "../../features/button-go-main-page/button-go-main-page.component";

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [
    TitleComponent,
    DescriptionComponent,
    CircleAnimationComponent,
    ButtonGoMainPageComponent
  ],
  template: `
   <app-title class="text-[24px]">что-то <br>пошло <br> не так...</app-title>
   <app-description class="text-white">Мы уже ведём работы и разбираемся с проблемой. Попробуйте еще раз или вернитесь позже</app-description>
   <app-circle-animation></app-circle-animation>
   <div class="absolute right-1 top-1/4 -z-10">
     <img src="../../assets/images/revert-car.png" alt="">
   </div>
   <app-button-go-main-page></app-button-go-main-page>
  `,
  styles: ``,
  host: {
    class: 'flex flex-col gap-5 w-full'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ErrorPageComponent {

}
