import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TitleComponent} from "../../shared/ui/title/title.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {LineLightGrayComponent} from "../../shared/ui/line-light-gray/line-light-gray.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [
    TitleComponent,
    DescriptionComponent,
    LineLightGrayComponent,
    ButtonEventComponent
  ],
  template: `
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-10">
        <div class="text-left mb-5 ">
        <div class=" flex gap-1 flex-col mb-5">
          <app-title>Вход</app-title>
          <app-description class="text-gray-500 dark:text-gray-400">В панель администратора</app-description>
        </div>
          <app-line-light-gray></app-line-light-gray>
        </div>
        <div>
          <form action="">
            <div class="mb-5">
              <label for="email" class="block mb-1 text-sm text-gray-custom-700">E-mail</label>
              <input type="email" name="email" id="email" placeholder="you@company.com" class="text-white w-full px-4 py-2.5 placeholder-gray-custom-800 border-2 border-white-400 bg-transparent  focus:outline-none  " />
            </div>
            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <label  for="password" class="text-sm text-gray-600 text-gray-custom-700">Пароль</label>
              </div>
              <input type="password" name="password" id="password" placeholder="Пароль" class="text-white w-full px-4 py-2.5 placeholder-placeholder-gray-custom-800 border-2  focus:outline-none bg-transparent  " />
            </div>
            <div class="md:mb-5">
              <app-line-light-gray></app-line-light-gray>
            </div>
            <div class="max-md:fixed-bottom-container">
              <app-button-event >
                <div class="py-2.5">
                  <app-description>Войти</app-description>
                </div>
              </app-button-event>
            </div>
          </form>
        </div>
      </div>
    </div>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LoginModalComponent {

}
