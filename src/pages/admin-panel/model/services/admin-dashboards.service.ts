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
      route:AdminRoutes.SURVEY_RESULTS
    },

  ]
})
  public readonly dashboardLeftItems = computed<AdminLeftSidePanel>(() => this.#dashboardLeftItems())
  // ______________________________________________________
  // ______________________________________________________

  readonly #statusAddedSurvey = signal<boolean>(true);
  public readonly statusAddedSurvey = computed(() => this.#statusAddedSurvey())
  // ______________________________________________________
  readonly #stepCreateSurvey = signal<number>(1)
  public readonly stepCreateSurvey = computed(() => this.#stepCreateSurvey())
  // ______________________________________________________

  readonly #totalCountStepCreateSurvey = signal(2)
  public readonly totalCountStepCreateSurvey = computed(() => this.#totalCountStepCreateSurvey())
  // ______________________________________________________

  public  changeStatusAddSurvey() {
  this.#statusAddedSurvey.update((v) => !v)
  }
  // ______________________________________________________

  public nextStepCreateSurvey () {
    this.#stepCreateSurvey.update((v) => {
      if( v < this.totalCountStepCreateSurvey()) {
        return v + 1;
      }
      return v;
    });
  }
  // ______________________________________________________

  public previousStepCreateSurvey() {
  this.#stepCreateSurvey.update((v) => {
    if(v > 0) {
      return   v - 1
    }
    return v
  })
  }
  // ______________________________________________________

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
  // ______________________________________________________

}
