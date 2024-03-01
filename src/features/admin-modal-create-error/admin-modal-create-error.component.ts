import { Component } from '@angular/core';
import {MatDialogClose} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-modal-create-error',
  standalone: true,
  imports: [
    MatDialogClose
  ],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2>Упс, что-то пошло не так...</h2>
      <p>Анкета не была добавлена. Пожалуйста, повторите попытку или попробуйте в другой раз</p>
      <button [mat-dialog-close]="true" class="main_btn_admin">Понятно</button>
    </div>
  `,
  styles: `
    ::ng-deep.mat-mdc-dialog-container .mdc-dialog__surface {
      border-radius: 8px;
    }
  h2 {
    font-size:18px;
    color: #161616;
    font-weight: 600;
  }
  p {
    color: #8B8B8B;
    font-size: 16px;
    font-weight: 400;
  }
  `
})
export class AdminModalCreateErrorComponent {

}
