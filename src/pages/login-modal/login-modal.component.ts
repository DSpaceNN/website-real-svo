import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [],
  template: `
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-10">
        <div class="text-center">
          <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Вход</h1>
          <p class="text-gray-500 dark:text-gray-400">В панель администратора</p>
        </div>
        <div class="m-7">
          <form action="">
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">E-mail</label>
              <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
            <div class="mb-6">
              <div class="flex justify-between mb-2">
                <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Пароль</label>
              </div>
              <input type="password" name="password" id="password" placeholder="Пароль" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
            <div class="mb-6">
              <button type="button" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Вход</button>
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
