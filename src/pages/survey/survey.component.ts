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
import {RouterLink, RouterOutlet} from "@angular/router";

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
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <router-outlet name="currentSurveyStatusStep"></router-outlet>

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
filterItems(filterValue:string) {
  this._surveyService.setFiler(filterValue)
  this._surveyService.getSurvey()
}
}
