import {ChangeDetectionStrategy, Component, EventEmitter, input, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-button-event',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button-event.component.html',
  styleUrl: './button-event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-red-600'
  },

})
export class ButtonEventComponent {
@Output() event = new EventEmitter<void>()
  disabled = input<boolean>(false)
}
