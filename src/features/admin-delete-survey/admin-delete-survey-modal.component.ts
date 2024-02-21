import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ModalComponent} from "../../shared/ui/modal/modal.component";
import {MatDialogClose} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-delete-survey-modal',
  standalone: true,
  imports: [
    ModalComponent,
    MatDialogClose,
  ],
  template: `
      <div class="p-6 rounded-[8px] flex flex-col gap-4 items-start ">
        <h2 class="text-[18px] text-black-btn font-[600]">Вы уверены, что хотите удалить анкету?</h2>
        <h3>Данные будут утеряны, архива пока нет</h3>
        <div class="flex gap-2 w-full">
          <button [mat-dialog-close]="true"   class="main_btn_admin flex gap-1 w-1/2 text-center justify-center btn">
              Да
          </button>
          <button [mat-dialog-close]="false"  class="second_btn_admin flex gap-1 w-1/2 text-center justify-center btn">
              Отмена
          </button>
        </div>
      </div>
  `,
  styles: `
    .btn {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDeleteSurveyModalComponent {

}
