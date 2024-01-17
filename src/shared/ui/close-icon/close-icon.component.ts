import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-close-icon',
  standalone: true,
  imports: [],
  templateUrl: './close-icon.component.html',
  styleUrl: './close-icon.component.scss'
})
export class CloseIconComponent {
  @Output() closed = new EventEmitter<void>()
  close() {
    this.closed.emit()
  }
}
