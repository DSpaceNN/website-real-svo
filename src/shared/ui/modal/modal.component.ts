import {Component, ContentChild, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  host: {
    class: ''
  }
})
export class ModalComponent<T> {
@ContentChild("modal", {read: TemplateRef})modalItem!:TemplateRef<T>
}
