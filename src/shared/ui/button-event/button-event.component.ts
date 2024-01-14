import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button-event',
  standalone: true,
  imports: [],
  templateUrl: './button-event.component.html',
  styleUrl: './button-event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-red-600'
  },

})
export class ButtonEventComponent {
@Output() event = new EventEmitter<void>()
}
