import {ChangeDetectionStrategy, Component, EventEmitter, input, Output} from '@angular/core';
import {MatRadioButton, MatRadioChange, MatRadioGroup} from "@angular/material/radio";

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [
    MatRadioButton,
    MatRadioGroup
  ],
  template: `
      <mat-radio-button (change)="onChange($event)" [value]="radioButtonValue()">
        <ng-content select="[radio-value]"></ng-content>
      </mat-radio-button>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent {
  radioButtonValue = input.required<string>()

  @Output() valueChange = new EventEmitter();
  onChange(event: MatRadioChange) {
    this.valueChange.emit(event.value);
  }
}
