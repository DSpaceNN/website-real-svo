import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-button-event',
  standalone: true,
  imports: [],
  templateUrl: './button-event.component.html',
  styleUrl: './button-event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonEventComponent {

}
