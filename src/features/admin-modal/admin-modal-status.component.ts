import {ChangeDetectionStrategy, Component, Inject, inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose} from "@angular/material/dialog";
import {SurveyResultService} from "../../widgets/admin-results/model/services/survey-result.service";
import {Dropdown} from "primeng/dropdown";
import {UpdateProcessedStatusDto} from "../../widgets/admin-results/model/types/survey-result";
export type DialogData = {
  sendStatusDto:UpdateProcessedStatusDto,
  dropdown:Dropdown,
  slug:string
};
@Component({
  selector: 'app-admin-modal-status',
  standalone: true,
  imports: [
    MatDialogClose
  ],

  template: `
  <div class="flex flex-col gap-4 p-6 ">
        <h2 class="text-[18px]">Вы уверены, что хотите изменить статус приза?</h2>
        <div class="bg-light-gray-admin text-center py-1.5 rounded-[8px]">
          <h2 class="text-[16px]">Уникальный код {{data.slug}} </h2>
        </div>
    <p class="text-[16px] text-gray-admin">После изменения статуса приза, действие нельзя будет отменить. Пожалуйста, учтите это при выборе.</p>
    <div class="flex gap-2 justify-center">
      <button (click)="submit()" [mat-dialog-close]="true" class="main_btn_admin flex gap-1 w-1/2 text-center justify-center btn">
        Да
      </button>
      <button (click)="resetDropdown()" [mat-dialog-close]="false" class=" second_btn_admin flex gap-1 w-1/2 text-center justify-center btn">
        Отмена
      </button>
    </div>
  </div>
  `,
  styles: `
    ::ng-deep.mat-mdc-dialog-container .mdc-dialog__surface {
      border-radius: 8px;
    }
  h2 {
    font-weight: 600;
    color: #161616;
  }
  p {
    font-weight: 400;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminModalStatusComponent {
  private _surveyResultService = inject(SurveyResultService)

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  resetDropdown() {
    this.data.dropdown.clear()
  }
  submit() {
      this._surveyResultService.updateStatus(this.data.sendStatusDto)
  }
}
