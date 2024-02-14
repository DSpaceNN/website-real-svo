import {Component, inject} from '@angular/core';
import {ModalComponent} from "../../shared/ui/modal/modal.component";
import {TitleComponent} from "../../shared/ui/title/title.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {ContainerNumberCardComponent} from "../../shared/ui/container-number-card/container-number-card.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {CloseIconComponent} from "../../shared/ui/close-icon/close-icon.component";
import { MatDialogClose} from "@angular/material/dialog";
import {LoseOrWinQuestionsService} from "../../shared/model/services/lose-or-win-questions.service";

@Component({
  selector: 'app-modal-remember',
  standalone: true,
  imports: [
    ModalComponent,
    TitleComponent,
    DescriptionComponent,
    ContainerNumberCardComponent,
    ButtonEventComponent,
    CloseIconComponent,
    MatDialogClose
  ],
  templateUrl: './modal-remember.component.html',
  styleUrl: './modal-remember.component.scss'
})
export class ModalRememberComponent {
  private _loseOrWinQuestions = inject(LoseOrWinQuestionsService)
  public readonly uniqueCode = this._loseOrWinQuestions.uniqueCode
}
