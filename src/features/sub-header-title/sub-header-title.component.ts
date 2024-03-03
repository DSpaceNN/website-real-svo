import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {SurveyService} from "../../widgets/create-survey/model/service/survey.service";
import {RightArrowComponent} from "../../shared/icons/right-arrow/right-arrow.component";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-sub-header-title',
  standalone: true,
  imports: [
    RightArrowComponent,
    AsyncPipe
  ],
  template: `
    <div class="flex gap-2 items-center">
      <h2 class="text-[24px] font-bold text-gray-admin">Анкеты</h2>
    <app-right-arrow></app-right-arrow>
      <h2 class="text-[24px] font-bold">{{subHeader$ | async}}</h2>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubHeaderTitleComponent {
  private activatedRoute = inject(ActivatedRoute);
  subHeader$ = this.activatedRoute.queryParams.pipe(map((p) => p['sub_header']))
  private _surveyService = inject(SurveyService)
  public readonly totalCountSurveys = this._surveyService.totalCountSurveys
}``
