import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TitleComponent} from "../../shared/ui/title/title.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {ContainerNumberCardComponent} from "../../shared/ui/container-number-card/container-number-card.component";

@Component({
  selector: 'app-win-quest',
  standalone: true,
  imports: [
    TitleComponent,
    DescriptionComponent,
    ContainerNumberCardComponent,
  ],
  template: `
        <section class="mt-[36px] ">
        <div class="mb-5">
          <app-title class="text-[28px]">Поздра-вляем!</app-title>
        </div>
            <div class="mb-5 flex-col flex gap-4">
              <app-description class="text-white">
                Вы успешно прошли Квест Музея СВО и можете получить приз при выходе
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
        </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WinQuestComponent  {}
