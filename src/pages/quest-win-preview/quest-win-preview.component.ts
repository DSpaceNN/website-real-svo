import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import WinQuestComponent from "../../widgets/win-quest/win-quest.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {DescriptionComponent} from "../../shared/ui/description/description.component";
import {ConfirmDialog} from "../../shared/model/decorators/confirm-dialog.decorator";
import {ModalRememberComponent} from "../../widgets/modal-remember/modal-remember.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quest-win-preview',
  standalone: true,
  imports: [
    WinQuestComponent,
    ButtonEventComponent,
    DescriptionComponent
  ],
  styles: [
    `
    .firework_container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
      width: 100%;
    }
    .firework_container:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .firework {
      height: 100vh;
      width: 100%;
    }
  `
  ],
  template: `
   <app-win-quest></app-win-quest>
   <div class="firework_container">
     <img class="firework" src="../../assets/video/firework.gif" alt="Описание гифки">
   </div>
   <div class="absolute left-0 right-0 bottom-4 mx-4 text-center">
     <app-button-event  (event)="openRememberDialog()" >
       <div class="flex gap-1 justify-center items-center my-[10px]">
         <app-description class=" [&>p]:!text-[16px]">Вернуться на главную</app-description>
         <img src="../../assets/images/arrow_outward.svg" alt="arrow">

       </div>
     </app-button-event>
   </div>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class QuestWinPreviewComponent {
    private  readonly _router = inject(Router)
  @ConfirmDialog(ModalRememberComponent, {
    minWidth: '280px'
  })
  openRememberDialog() {
  this._router.navigate(['questions/result'])
  }

}
