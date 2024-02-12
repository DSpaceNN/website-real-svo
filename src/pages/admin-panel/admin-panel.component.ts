import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AdminPanelTabsComponent} from "../../features/admin-panel-tabs/admin-panel-tabs.component";
import {ADMIN_PAGE_ROUTING} from "./model";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    RouterOutlet,
    AdminPanelTabsComponent
  ],
  template: `
   <section>
    <div class="my-5">
      <app-admin-panel-tabs [tabs]="ADMIN_PAGE_ROUTING"></app-admin-panel-tabs>
    </div>
      <router-outlet></router-outlet>
   </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AdminPanelComponent {

  protected readonly ADMIN_PAGE_ROUTING = ADMIN_PAGE_ROUTING;
}
