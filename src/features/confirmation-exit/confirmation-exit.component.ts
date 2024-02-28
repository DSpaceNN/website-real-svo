import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatDialogClose} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation-exit',
  standalone: true,
  imports: [
    MatDialogClose
  ],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-[18px] font-[600] text-[#161616]">Вы уверены, что хотите выйти?</h2>
      <p class="text-[16px] text-gray-admin">Данные будут утеряны, вам придется начать <br> сначала</p>
      <div class="flex gap-2">
        <button [mat-dialog-close]="true" class="second_btn_admin flex gap-1 w-1/2 text-center justify-center btn">
          Да
        </button>
        <button [mat-dialog-close]="false" class="main_btn_admin flex gap-1 w-1/2 text-center justify-center btn">
          Отмена
        </button>
      </div>
    </div>
  `,
  styles: `
    ::ng-deep.mat-mdc-dialog-container .mdc-dialog__surface {
      border-radius: 8px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationExitComponent {

}
