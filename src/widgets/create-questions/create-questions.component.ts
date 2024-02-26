import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import AddedSurveyStepTwoComponent from "../added-survey-step-two/added-survey-step-two.component";
import {AdminPanelSubHeaderComponent} from "../../shared/ui/admin-panel-sub-header/admin-panel-sub-header.component";
import {PlusIconComponent} from "../../shared/icons/plus-icon/plus-icon.component";
import {SubHeaderTitleComponent} from "../../features/sub-header-title/sub-header-title.component";
import {RedirectToPageService} from "../../shared/model/services/redirect-to-page.service";

@Component({
  selector: 'app-create-questions',
  standalone: true,
  imports: [
    AddedSurveyStepTwoComponent,
    AdminPanelSubHeaderComponent,
    PlusIconComponent,
    SubHeaderTitleComponent
  ],
  template: `
    <app-admin-panel-sub-header>
      <div class="flex items-center gap-2" title>
        <app-sub-header-title [status]="false"></app-sub-header-title>
      </div>
    </app-admin-panel-sub-header>

   <div class="px-6 mt-6">
     <div class="w-full flex justify-between items-center mb-12">
       <div class="flex items-center gap-2">
         <div class="rounded-[8px] bg-light-green-admin py-1 px-6 text-center font-medium text-[18px]">
           2/2 шаг
         </div>
         <h2 class="font-medium text-[18px]">Добавьте вопросы и ответы, укажите правильные</h2>
       </div>
       <div class="flex gap-1">
         <button (click)="redirectToCreateSurvey()" class="second_btn_admin font-medium px-5 py-2">
           Назад
         </button>
         <button class="main_btn_admin font-medium px-5 py-2">
           Сохранить
         </button>
       </div>
     </div>
     <app-added-survey-step-two>
     </app-added-survey-step-two>
   </div>
  `,
  styles: ``,
  host: {

  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CreateQuestionsComponent {
private _redirectService = inject(RedirectToPageService)
  redirectToCreateSurvey() {
  this._redirectService.redirectToCreateSurveyAdminPanelPage()
  }
}
