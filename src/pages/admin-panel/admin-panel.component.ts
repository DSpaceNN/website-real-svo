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
import {RightArrowComponent} from "../../shared/icons/right-arrow/right-arrow.component";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    RouterOutlet,
    AdminPanelTabsComponent,
    HeaderAdminPanelComponent,
    LeftSidebarAdminComponent,
    RouterLink,
    RouterLinkActive,
    RightArrowComponent
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
              <app-right-arrow></app-right-arrow>
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
