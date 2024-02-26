import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AdminPanelTabsComponent} from "../../features/admin-panel-tabs/admin-panel-tabs.component";
import {HeaderAdminPanelComponent} from "../header-admin-panel/header-admin-panel.component";
import {LeftSidebarAdminComponent} from "../../widgets/left-sidebar-admin/left-sidebar-admin.component";
import {AdminDashboardsService} from "./model/services/admin-dashboards.service";
import {routes} from "../../app/app.routes";
import {RedirectToPageService} from "../../shared/model/services/redirect-to-page.service";
import {AdminDashboardLeftSideId} from "./model/types/admin-dashboard";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    RouterOutlet,
    AdminPanelTabsComponent,
    HeaderAdminPanelComponent,
    LeftSidebarAdminComponent,
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <app-header-admin-panel></app-header-admin-panel>
   <section class="mt-8 -mx-4 flex">
     <div class="flex  flex-col  gap-4 min-w-[300px] border-r-[1px] border-gray-admin h-[92vh] ">
       <app-left-sidebar-admin [sidebarItems]="adminDashboardLeftSide()">
         <ng-template #dashboardLeft let-subItems>
        <div  (click)="changeTab(subItems.id)" [routerLink]='subItems.route'
              class="flex justify-between items-center gap-1 py-1 pl-[44px] pr-[16px] hover:bg-gray-custom-opacity-400 rounded-[8px] cursor-pointer transition-all">
            <h2>{{subItems.title}}</h2>
            @if(subItems.active) {
              <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M12.15 4.99999L1 4.99999C0.716667 4.99999 0.479167 5.09582 0.2875 5.28749C0.0958333 5.47915 0 5.71665 0 5.99999C0 6.28332 0.0958333 6.52082 0.2875 6.71249C0.479167 6.90415 0.716667 6.99999 1 6.99999L12.15 6.99999L9.3 9.84999C9.1 10.05 9.00417 10.2833 9.0125 10.55C9.02083 10.8167 9.11667 11.05 9.3 11.25C9.5 11.45 9.7375 11.5542 10.0125 11.5625C10.2875 11.5708 10.525 11.475 10.725 11.275L15.3 6.69999C15.4 6.59999 15.4708 6.49165 15.5125 6.37499C15.5542 6.25832 15.575 6.13332 15.575 5.99999C15.575 5.86665 15.5542 5.74165 15.5125 5.62499C15.4708 5.50832 15.4 5.39999 15.3 5.29999L10.725 0.724988C10.525 0.524988 10.2875 0.429155 10.0125 0.437489C9.7375 0.445822 9.5 0.549989 9.3 0.749989C9.11667 0.949988 9.02083 1.18332 9.0125 1.44999C9.00417 1.71665 9.1 1.94999 9.3 2.14999L12.15 4.99999Z" fill="#161616"/>
              </svg>
            }
          </div>
         </ng-template>
       </app-left-sidebar-admin>
     </div>
     <div class="w-full" >
      <router-outlet></router-outlet>
     </div>
   </section>
  `,
  styles: ``,
  host: {
    class : 'block '
  },

  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AdminPanelComponent implements OnInit,OnDestroy{
  private _adminDashboardService = inject(AdminDashboardsService)
  private _redirectToPageService = inject(RedirectToPageService)
  private originalBackground: string | null = null;

  ngOnInit(): void {
    this._redirectToPageService.redirectToSurveyAdminPanelPage()
  }

  ngOnDestroy(): void {
    this.renderer.setStyle(
      this.el.nativeElement.ownerDocument.body,
      'backgroundImage',
      this.originalBackground
    );
  }
  public readonly  adminDashboardLeftSide = this._adminDashboardService.dashboardLeftItems
  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.originalBackground = this.el.nativeElement.ownerDocument.body.style.backgroundImage;
    this.renderer.setStyle(
      this.el.nativeElement.ownerDocument.body,
      'background',
      'none'
    );
  }
  changeTab(id:number) {
    this._adminDashboardService.changeActiveTab(id)
    if(id === AdminDashboardLeftSideId.SURVEYS) {
      this._redirectToPageService.redirectToSurveyAdminPanelPage()
    }
  }
}
