import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialogClose} from "@angular/material/dialog";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {ModalComponent} from "../../shared/ui/modal/modal.component";
import {TitleComponent} from "../../shared/ui/title/title.component";
import {CloseIconComponent} from "../../shared/ui/close-icon/close-icon.component";
import {FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-change',
  standalone: true,
  imports: [
    MatDialogClose,
    ButtonEventComponent,
    ModalComponent,
    TitleComponent,
    CloseIconComponent,
    ReactiveFormsModule
  ],
  template: `
        <app-modal>
          <ng-template #modal>
            <div class="py-[16px] px-[16px] gap-5  flex flex-col justify-center text-white ">
              <div class="flex justify-between">
                <app-title>Редактирование</app-title>
                <app-close-icon [mat-dialog-close]="false"  class="z-[2]"></app-close-icon>
              </div>
             <form [formGroup]="editingForm" class="flex flex-col max-w-md gap-2">
               <input formControlName="name" type="text" name="name" id="name" placeholder="Имя" class="text-white w-full px-4 py-1 placeholder-placeholder-gray-custom-opacity-800 border-2  focus:outline-none bg-transparent  " />
               <input formControlName="slug"   type="text" name="номер" id="номер" placeholder="Номер" class="text-white w-full px-4 py-1 placeholder-placeholder-gray-custom-opacity-800 border-2  focus:outline-none bg-transparent  " />
             </form>
              <app-button-event type="submit" [disabled]="true" (event)="click()" class="w-full" >
                Сохранить
              </app-button-event>
            </div>
          </ng-template>
        </app-modal>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalChangeComponent {
editingForm = new FormGroup({
  'name': new FormControl('',),
  'slug': new FormControl('',)
})
click() {
  this.editingForm.reset()
}

}
