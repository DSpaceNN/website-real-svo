import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel-sub-card',
  standalone: true,
  imports: [
  ],
  template: `
   <div class="my-6 w-full ">
   <ng-content></ng-content>
   </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPanelSubCardComponent {

}
