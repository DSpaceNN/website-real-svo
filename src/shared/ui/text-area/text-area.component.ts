import {ChangeDetectionStrategy, Component, EventEmitter, input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CloseIconComponent} from "../../icons/close-icon/close-icon.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [
    FormsModule,
    CloseIconComponent,
    NgClass,
  ],
  template: `
  <label for="area" class="block text-[18px]">{{valueLabel()}}</label>
  <div class="relative">
    <div class="flex gap-1">
      <div  (click)="clearTextArea()" [ngClass]="{hidden:!valueTextArea}" [style.right]="positionCloseIcon().right" [style.top]="positionCloseIcon().top"  class="absolute"><close-icon></close-icon></div>
      <textarea [value]="inputValue()" (ngModelChange)="value.emit($event)" [(ngModel)]="valueTextArea" #area id="area" rows="4" class="resize-none block p-2.5 w-full border-light-gray-admin border-[2px] rounded-[8px] max-h-[80px]" placeholder="Write your thoughts here..."></textarea>
    <ng-content select="[text-area-btn]"></ng-content>
    </div>
  </div>
`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextAreaComponent {
  valueLabel = input<string>()
  inputValue = input<string>('')
  positionCloseIcon = input<{right:string, top:string}>({right: '5.5rem', top: '32px'})
@Output() value = new EventEmitter<string>()
  valueTextArea:string = ''
  clearTextArea() {
    this.valueTextArea = ''
    this.value.emit(this.valueTextArea)
  }
}
