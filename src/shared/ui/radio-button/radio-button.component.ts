import {ChangeDetectionStrategy, Component, DoCheck, EventEmitter, input, Output, signal} from '@angular/core';
import {MatRadioButton, MatRadioChange, MatRadioGroup} from "@angular/material/radio";
import {options} from "../../model/types/surveys";

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [
    MatRadioButton,
    MatRadioGroup
  ],
  template: `
       <mat-radio-button [checked]="radioButtonValue().isSelected" (change)="onChange($event)" [value]="radioButtonValue()">
         <ng-content select="[radio-value]"></ng-content>
       </mat-radio-button>
  `,
  styles: ``,
  host: {
    class: 'relative'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent {
  radioButtonValue = input.required<options>()
  @Output() valueChange = new EventEmitter();
  onChange(event: MatRadioChange) {

    this.valueChange.emit(event.value);
  }
}
