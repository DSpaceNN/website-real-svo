import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {LineLightGrayComponent} from "../../shared/ui/line-light-gray/line-light-gray.component";
import {DropdownModule} from "primeng/dropdown";
import {SharedModule} from "primeng/api";
import {FormsModule} from "@angular/forms";
import {
  OptionsDropdownStatus,
  ResultStatus,
  UpdateProcessedStatusDto
} from "../../widgets/admin-results/model/types/survey-result";
import {SurveyResultService} from "../../widgets/admin-results/model/services/survey-result.service";

@Component({
  selector: 'app-admin-dropdown',
  standalone: true,
  imports: [
    LineLightGrayComponent,
    DropdownModule,
    SharedModule,
    FormsModule
  ],
  template: `
        <div class=" max-w-[205px] ">
          <p-dropdown appendTo="body" (ngModelChange)="click($event)"  [options]="options" [(ngModel)]="selectedOption" optionLabel="name"  placeholder="Ожидает получение">
            <ng-template  pTemplate="selectedItem" let-selected>
              <div class="flex gap-1">
                <h2 >{{selected.title}}</h2>
              </div>

            </ng-template>
            <ng-template let-status pTemplate="item">
              <div class="flex justify-between gap-1">
                <h2 >{{status.title}}</h2>
              </div>
            </ng-template>
          </p-dropdown>

        </div>
  `,
  styles: `
  ::ng-deep.p-dropdown {
    display: flex;
    height: 40px;
    padding: 2px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background:  #FFE9B1;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AdminDropdownComponent {
  private _surveyResultService = inject(SurveyResultService)
  currentSurveyResultId = input.required<string>()
  selectedOption!: OptionsDropdownStatus
  options: OptionsDropdownStatus[] = [
    {
      title: 'Получен',
      resultStatus: ResultStatus.Received
    },
    {
      title: 'Не получен',
      resultStatus: ResultStatus.NotReceived

    }
  ]

  click(event: OptionsDropdownStatus) {
    const sendStatusDto: UpdateProcessedStatusDto = {
      resultStatus: event.resultStatus,
      surveyResultId: this.currentSurveyResultId()
    }
    this._surveyResultService.updateStatus(sendStatusDto)
  }
}
