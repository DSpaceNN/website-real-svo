import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {LineLightGrayComponent} from "../../shared/ui/line-light-gray/line-light-gray.component";
import {TitleComponent} from "../../shared/ui/title/title.component";

@Component({
  selector: 'app-create-survey',
  standalone: true,
  imports: [
    ButtonEventComponent,
    DescriptionComponent,
    LineLightGrayComponent,
    TitleComponent
  ],
  template: `
  <app-title class="">Создание анкеты</app-title>
  <form action="">
    <div class="mb-5">
      <label for="name" class="block mb-1 text-sm text-gray-custom-opacity-700">Название анкеты</label>
      <input form required type="text" name="email" id="name" placeholder="@Survey" class="text-white w-full px-4 py-2.5 placeholder-gray-custom-opacity-800 border-2 border-white-400 bg-transparent  focus:outline-none  " />
    </div>
    <div class="mb-5">
      <div class="flex justify-between mb-1">
        <label  for="slug" class="text-sm text-gray-600 text-gray-custom-opacity-700">Slug анкеты</label>
      </div>
      <input required type="text" name="slug" id="slug" placeholder="№25" class="text-white w-full px-4 py-2.5 placeholder-placeholder-gray-custom-opacity-800 border-2  focus:outline-none bg-transparent  " />
    </div>
    <div class="md:mb-5">
      <app-line-light-gray></app-line-light-gray>
    </div>
    <div class="max-md:fixed-bottom-container">
      <app-button-event >
        <div class="py-2.5">
          <app-description>Создать</app-description>
        </div>
      </app-button-event>
    </div>
  </form>

  `,
  styles: ``,
  host: {
    class: 'block mt-10 max-w-md mx-auto'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CreateSurveyComponent {

}
