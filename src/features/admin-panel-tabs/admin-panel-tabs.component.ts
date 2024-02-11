import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {ITabs} from "../../pages/admin-panel/model/types/admin-panel";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-admin-panel-tabs',
  standalone: true,
  imports: [
    ButtonEventComponent,
    RouterLink,
    RouterLinkActive
  ],
  template: `
<div class="w-full flex justify-between gap-4">
  @for (tab of tabs(); track tab) {
    <app-button-event [routerLink]="[tab.tabUrl]" [routerLinkActive]="['is-active']" class="w-full">{{tab.description}}</app-button-event>
  }
</div>
  `,
  styles: `
  .is-active {
    color: red;
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPanelTabsComponent {
tabs = input<ITabs[]>()
}
