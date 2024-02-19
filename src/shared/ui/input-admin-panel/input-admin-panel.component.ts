import {ChangeDetectionStrategy, Component, EventEmitter, input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CloseIconComponent} from "../../icons/close-icon/close-icon.component";

@Component({
  selector: 'app-input-admin-panel',
  standalone: true,
  imports: [
    FormsModule,
    CloseIconComponent,
    CloseIconComponent
  ],
  template: `
 <div class="border border-gray-admin p-2 rounded-[8px] flex items-center ">
   <ng-content select="[icon]"></ng-content>
   <input [(ngModel)]="valueInput" (ngModelChange)="inputValue.emit(valueInput)" class="w-full focus:outline-0" type="text" [placeholder]="placeholder()">
   @if (valueInput) {
    <close-icon (click)="clearInput()"></close-icon>
   }
 </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputAdminPanelComponent {
placeholder = input<string>('Значение')
public  valueInput:string = ''
  clearInput() {
  this.valueInput = ''
    this.inputValue.emit('')
  }
  @Output() inputValue = new EventEmitter<string>()
}
