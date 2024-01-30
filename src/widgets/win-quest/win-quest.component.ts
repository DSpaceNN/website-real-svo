import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TitleComponent} from "../../shared/ui/title/title.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {ContainerNumberCardComponent} from "../../shared/ui/container-number-card/container-number-card.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";

@Component({
  selector: 'app-win-quest',
  standalone: true,
  imports: [
    TitleComponent,
    DescriptionComponent,
    ContainerNumberCardComponent,
    ButtonEventComponent
  ],
  styles: [
    `
    .firework_container {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .firework_container:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }
  `
  ],
  template: `
        <section class="mt-[36px] ">
        <div class="mb-5">
          <app-title class="text-[28px]">Поздра-вляем!</app-title>
        </div>
            <div class="mb-5 flex-col flex gap-4">
              <app-description class="text-white">
                Вы успешно прошли Квест Музея СВО и можете получить сувенир при выходе
              </app-description>
              <app-container-number-card >
                <ng-template #numberCard>
                  <div class="flex flex-col justify-center text-center gap-1 py-[12px] " >
                    <app-description class="text-white">Уникальный код</app-description>
                    <app-title class="text-[14px]">28</app-title>
                  </div>
                </ng-template>
              </app-container-number-card>
              <app-description class="text-white">Просто назовите уникальный код на экране администратору</app-description>
            </div>
          <div class="firework_container">
            <img src="../../assets/video/firework.gif" alt="Описание гифки">
          </div>
          <div class="absolute left-0 right-0 bottom-4 mx-4 text-center">
            <app-button-event>
              <div class="flex gap-1 justify-center items-center my-[10px]">
                <app-description class=" [&>p]:!text-[16px]">Вернуться на главную</app-description>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <mask id="mask0_2938_27960" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_2938_27960)">
                    <path d="M6.16567 17.9L4.99902 16.7333L15.0657 6.66665H5.89902V5H17.899V17H16.2324V7.83333L6.16567 17.9Z" fill="white"/>
                  </g>
                </svg>
              </div>
            </app-button-event>
          </div>
        </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WinQuestComponent  {}
