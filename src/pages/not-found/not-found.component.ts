import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TitleComponent} from "../../shared/ui/title/title.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {CircleAnimationComponent} from "../../shared/ui/circle-animation/circle-animation.component";
import {ButtonGoMainPageComponent} from "../../features/button-go-main-page/button-go-main-page.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    TitleComponent,
    ButtonEventComponent,
    DescriptionComponent,
    RouterLink,
    CircleAnimationComponent,
    ButtonGoMainPageComponent,
  ],
  template: `
    <app-title class=" text-[24px] md:text-[26px] text-left mx-auto md:mx-0"> Страница <br class="md:hidden"> не <br class="md:hidden"> найдена...</app-title>
<app-button-go-main-page></app-button-go-main-page>

  `,
host: {
    class: 'flex gap-4 flex-col justify-center w-full mt-5 '
},
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class NotFoundComponent {

}
