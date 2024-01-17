import {Component, EventEmitter, inject, Inject, Output} from '@angular/core';
import {ModalComponent} from "../../shared/ui/modal/modal.component";
import {TitleComponent} from "../../shared/ui/title/title.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {ContainerNumberCardComponent} from "../../shared/ui/container-number-card/container-number-card.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {CloseIconComponent} from "../../shared/ui/close-icon/close-icon.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-remember',
  standalone: true,
  imports: [
    ModalComponent,
    TitleComponent,
    DescriptionComponent,
    ContainerNumberCardComponent,
    ButtonEventComponent,
    CloseIconComponent
  ],
  templateUrl: './modal-remember.component.html',
  styleUrl: './modal-remember.component.scss'
})
export class ModalRememberComponent {
  private modal = inject(MatDialog);

  closeModal() {
    this.modal.closeAll()
  }
}
