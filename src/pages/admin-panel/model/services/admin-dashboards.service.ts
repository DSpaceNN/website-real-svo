import {computed, Injectable, signal} from '@angular/core';
import {AdminLeftSidePanel, AdminRoutes} from "../types/admin-panel";

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardsService {
readonly #dashboardLeftItems = signal<AdminLeftSidePanel>({
  menuTitle: 'Викторина-квест',
  subMenu: [
    {
      title:'Анкеты',
      id: 1,
      active: true,
      route:AdminRoutes.SURVEY,
    },
    {
      title:'Результаты',
      id: 2,
      active: false,
      route:AdminRoutes.CREATE_SURVEY
    },

  ]
})
public readonly dashboardLeftItems = computed<AdminLeftSidePanel>(() => this.#dashboardLeftItems())

  public changeActiveTab(tabId: number): void {

    const updatedSubMenu = this.dashboardLeftItems().subMenu.map((item) =>
      item.id === tabId ? { ...item, active: true } : { ...item, active: false }
    );
    this.#dashboardLeftItems.update((v) => {
     return  {
       menuTitle:v.menuTitle,
       subMenu: updatedSubMenu
     }
      }
    );
  }

}
