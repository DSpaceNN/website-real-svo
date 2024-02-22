import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AdminPanelSubHeaderComponent} from "../../shared/ui/admin-panel-sub-header/admin-panel-sub-header.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {AdminPanelSubCardComponent} from "../../features/admin-panel-sub-card/admin-panel-sub-card.component";
import {InputAdminPanelComponent} from "../../shared/ui/input-admin-panel/input-admin-panel.component";
import {TableComponent} from "../../shared/ui/table/table.component";
import {PlusIconComponent} from "../../shared/icons/plus-icon/plus-icon.component";
import {DeleteIconComponent} from "../../shared/icons/delete-icon/delete-icon.component";
import {SearchIconComponent} from "../../shared/icons/search-icon/search-icon.component";
import {AdminDashboardsService} from "../admin-panel/model/services/admin-dashboards.service";
import {AdminAddSurveyComponent} from "../../features/admin-add-survey/admin-add-survey.component";
import {SubHeaderTitleComponent} from "../../features/sub-header-title/sub-header-title.component";
import {SurveyService} from "../../widgets/create-survey/model/service/survey.service";

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [
    AdminPanelSubHeaderComponent,
    ButtonEventComponent,
    AdminPanelSubCardComponent,
    InputAdminPanelComponent,
    TableComponent,
    PlusIconComponent,
    DeleteIconComponent,
    SearchIconComponent,
    AdminAddSurveyComponent,
    SubHeaderTitleComponent,
  ],
  template: `
    <app-admin-panel-sub-header>
    <div class="flex items-center gap-2" title>
    <app-sub-header-title [status]="statusAddSurvey()"></app-sub-header-title>
    </div>
      @if (statusAddSurvey()) {
        <button (click)="addSurveyStatus()" btn class="main_btn_admin flex gap-1">
          Добавить
          <app-plus-icon></app-plus-icon>
        </button>
      } @else {
        <button (click)="addSurveyStatus()" btn class="low_priority_btn_admin flex gap-1">
          Отменить
        </button>
      }
    </app-admin-panel-sub-header>
   <div class=" ml-6 mr-10">
     @if (statusAddSurvey()) {
       <app-admin-panel-sub-card>
         <div class="flex justify-between w-full">
           <div class="w-[400px]">
             <app-input-admin-panel (inputValue)="filterItems($event)">
               <div icon class="pr-1">
                 <app-search-icon></app-search-icon>
               </div>
             </app-input-admin-panel>
           </div>

         </div>
       </app-admin-panel-sub-card>
       <app-table ></app-table>
     } @else {
       <app-admin-panel-sub-card>
        <app-admin-add-survey></app-admin-add-survey>
       </app-admin-panel-sub-card>
     }
     </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SurveyComponent {
private _adminDashboardService = inject(AdminDashboardsService)
  private _surveyService = inject(SurveyService)

  public readonly statusAddSurvey = this._adminDashboardService.statusAddedSurvey
  addSurveyStatus() {
  this._adminDashboardService.changeStatusAddSurvey()
  }
filterItems(name:string) {
  this._surveyService.filterSurvey(name)
}

}
