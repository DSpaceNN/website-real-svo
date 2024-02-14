import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TitleAndUnderlineComponent} from "../../features/title-and-underline/title-and-underline.component";
import {ContainerNumberCardComponent} from "../../shared/ui/container-number-card/container-number-card.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {TitleComponent} from "../../shared/ui/title/title.component";
import {LineWhiteComponent} from "../../shared/ui/line-white/line-white.component";
import {SlugService} from "../../shared/model/services/slug.service";

@Component({
  selector: 'app-question-result-header',
  standalone: true,
  imports: [
    TitleAndUnderlineComponent,
    ContainerNumberCardComponent,
    DescriptionComponent,
    TitleComponent,
    LineWhiteComponent
  ],
  template: `
    <section class="flex gap-4 flex-col">
      <app-title-and-underline ></app-title-and-underline>
      <app-container-number-card class="flex items-center">
        <ng-template #numberCard >
          <div class="flex justify-center items-center h-full gap-[8px] p-[8px] ">
            <app-description class="text-white">Карточка</app-description>
            <app-title class="text-[12px]">{{slug()}}</app-title></div>
        </ng-template>
      </app-container-number-card>
      <app-line-white></app-line-white>
    </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionResultHeaderComponent {
  private _slugService = inject(SlugService)
  public readonly slug = this._slugService.actualSlug

}
