import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TitleComponent} from "../../shared/ui/title/title.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    TitleComponent,
    ButtonEventComponent,
    DescriptionComponent,
    RouterLink
  ],
  template: `
    <app-title class="text-center md:text-left md:text-[22px]">Страница не найдена</app-title>
<div class="absolute left-0 right-0 bottom-4 mx-4 text-center">
  <app-button-event routerLink="/" >
    <div class="my-3">
      <app-description class="block">Вернуться на главную</app-description>
    </div>
  </app-button-event>
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
