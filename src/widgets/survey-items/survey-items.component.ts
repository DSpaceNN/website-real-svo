import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {AdminPanelSubHeaderComponent} from "../../shared/ui/admin-panel-sub-header/admin-panel-sub-header.component";
import {PlusIconComponent} from "../../shared/icons/plus-icon/plus-icon.component";
import {SubHeaderTitleComponent} from "../../features/sub-header-title/sub-header-title.component";
import {AdminAddSurveyComponent} from "../../features/admin-add-survey/admin-add-survey.component";
import {AdminPanelSubCardComponent} from "../../features/admin-panel-sub-card/admin-panel-sub-card.component";
import {InputAdminPanelComponent} from "../../shared/ui/input-admin-panel/input-admin-panel.component";
import {SearchIconComponent} from "../../shared/icons/search-icon/search-icon.component";
import {TableComponent} from "../../shared/ui/table/table.component";
import {RedirectToPageService} from "../../shared/model/services/redirect-to-page.service";
import {SurveyService} from "../create-survey/model/service/survey.service";
import {createParams} from "../../shared/model/types/query-params";
import {CreateSurveyService} from "../../pages/admin-panel/model/services/create-survey.service";

@Component({
  selector: 'app-survey-items',
  standalone: true,
  imports: [
    AdminPanelSubHeaderComponent,
    PlusIconComponent,
    SubHeaderTitleComponent,
    AdminAddSurveyComponent,
    AdminPanelSubCardComponent,
    InputAdminPanelComponent,
    SearchIconComponent,
    TableComponent
  ],
  template: `
    <app-admin-panel-sub-header>
      <div class="flex items-center gap-2" title>
        <h2 class="text-[24px] font-bold">
          Анкеты
        </h2>
      </div>
        <button (click)="redirectToCreateSurvey()" btn class="main_btn_admin flex gap-1">
          Добавить
          <app-plus-icon></app-plus-icon>
        </button>
    </app-admin-panel-sub-header>
    <div class=" ml-6 mr-10">
        <app-admin-panel-sub-card>
          <div class="flex justify-between w-full">
            <div class="w-[400px]">
              <app-input-admin-panel (inputValue)="updateFilterValue($event)">
                <div icon class="pr-1">
                  <app-search-icon></app-search-icon>
                </div>
              </app-input-admin-panel>
            </div>
          </div>
        </app-admin-panel-sub-card>
        <app-table ></app-table>
    </div>


  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SurveyItemsComponent implements OnInit{
  private _redirectService = inject(RedirectToPageService)
  private _surveyService = inject(SurveyService)
  private _createSurveyService = inject(CreateSurveyService)
  ngOnInit(): void {
    this._createSurveyService.resetSurvey()
    this._surveyService.setCurrentPage(0)
    this._redirectService.setQueryParams(createParams)
  }
  currentCount = signal<number>(0)
  redirectToCreateSurvey () {
    this._redirectService.redirectToCreateSurveyAdminPanelPage()
  }
  updateFilterValue(filter:string) {
    console.log(filter)
    this._surveyService.setCurrentPage(0)
    this._surveyService.setFiler(filter)
    this._surveyService.setSkipCount(0)
    this._surveyService.getSurvey()
    this.currentCount.set(0)
  }
}
