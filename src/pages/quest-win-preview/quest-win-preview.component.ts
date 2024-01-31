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
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
           <mask id="mask0_2938_27960" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
             <rect width="24" height="24" fill="#D9D9D9"/>
           </mask>
           <g mask="url(#mask0_2938_27960)">
             <path d="M6.16567 17.9L4.99902 16.7333L15.0657 6.66665H5.89902V5H17.899V17H16.2324V7.83333L6.16567 17.9Z" fill="white"/>
           </g>
         </svg>
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
