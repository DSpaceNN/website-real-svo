import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose} from "@angular/material/dialog";
import {UpdateProcessedStatusDto} from "../../widgets/admin-results/model/types/survey-result";
import {ICreateSurvey} from "../create-survey-form/model/types/create-survey-form.type";

@Component({
  selector: 'app-admin-modal-succes-create-answer',
  standalone: true,
  imports: [
    MatDialogClose
  ],
  template: `
 <div class="flex flex-col p-6 gap-4">
   <h2>Все получилось!</h2>
   <div class="cart_container">
        <h3>{{data.name}}</h3>
   </div>
   <p>Анкета была успешно добавлена. Вы можете редактировать или удалить анкету при необходимости</p>
   <button [mat-dialog-close]="true" class="main_btn_admin">Понятно</button>

 </div>
  `,
  styles: `
    ::ng-deep.mat-mdc-dialog-container .mdc-dialog__surface {
      border-radius: 8px;
    }
    .cart_container {
      text-align: center;
      background: #E2F7D8;
      padding: 6px 0;
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
export class AdminModalSuccesCreateAnswerComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICreateSurvey) {}

}
