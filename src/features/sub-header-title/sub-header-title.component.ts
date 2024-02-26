import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {SurveyService} from "../../widgets/create-survey/model/service/survey.service";
import {RightArrowComponent} from "../../shared/icons/right-arrow/right-arrow.component";

@Component({
  selector: 'app-sub-header-title',
  standalone: true,
  imports: [
    RightArrowComponent
  ],
  template: `
    @if (status()) {
      <h2 class="text-[24px] font-bold">
        Анкеты
      </h2>
    } @else {
    <div class="flex gap-2 items-center">
      <h2 class="text-[24px] font-bold text-gray-admin">Анкеты</h2>
    <app-right-arrow></app-right-arrow>
      <h2 class="text-[24px] font-bold">Добавление анкеты</h2>
    </div>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubHeaderTitleComponent {
  private _surveyService = inject(SurveyService)
  public readonly totalCountSurveys = this._surveyService.totalCountSurveys
status = input.required<boolean>()
}``
