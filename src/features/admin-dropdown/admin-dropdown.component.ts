import {ChangeDetectionStrategy, Component, effect, inject, input, ViewChild} from '@angular/core';
import {LineLightGrayComponent} from "../../shared/ui/line-light-gray/line-light-gray.component";
import {Dropdown, DropdownModule} from "primeng/dropdown";
import {SharedModule} from "primeng/api";
import {FormsModule} from "@angular/forms";
import {
  OptionsDropdownStatus,
  ResultStatus,
  UpdateProcessedStatusDto
} from "../../widgets/admin-results/model/types/survey-result";
import {SurveyResultService} from "../../widgets/admin-results/model/services/survey-result.service";
import {ConfirmDialog} from "../../shared/model/decorators/confirm-dialog.decorator";
import {AdminModalStatusComponent} from "../admin-modal/admin-modal-status.component";
import {NgClass} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-dropdown',
  standalone: true,
  imports: [
    LineLightGrayComponent,
    DropdownModule,
    SharedModule,
    FormsModule,
    NgClass
  ],
  template: `
        <div class=" max-w-[205px] ">
          <p-dropdown appendTo="body" (ngModelChange)="setStatusSurvey($event)"  [options]="options" [(ngModel)]="selectedOption" optionLabel="name"  placeholder="Ожидает получение">
            <ng-template  pTemplate="selectedItem" let-selected>
              <div class="flex gap-1">
                <h2>{{ selected.title }}</h2>
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
  @ViewChild(Dropdown, { static: false }) dropdown!: Dropdown;
  dialog = inject(MatDialog);
  slug = input.required<string>({
    alias: 'surveyId'
  })
  currentSurveyResultId = input.required<string>()
  selectedOption!: OptionsDropdownStatus | null
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
public setStatusSurvey(event: OptionsDropdownStatus) {
    if(event?.title) {
        const sendStatusDto: UpdateProcessedStatusDto = {
        resultStatus: event.resultStatus,
        surveyResultId: this.currentSurveyResultId()
     }
   this.dialog.open(AdminModalStatusComponent, {
     data:  {
       sendStatusDto:sendStatusDto,
       dropdown:this.dropdown,
       slug:this.slug()
     },
     maxWidth:'420px',
     hasBackdrop: true,
     disableClose: true,
   })
 }
  }
}
