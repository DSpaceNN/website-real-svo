import {Routes} from "@angular/router";

const adminPanelRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('../../../pages/admin-panel/admin-panel.component'),
    children: [
      {
        path: 'survey',
        loadComponent: () => import('../../../pages/survey/survey.component'),

      },
      {
        path: 'change-survey',
        loadComponent: () => import("../../../widgets/change-survey/change-survey.component"),

      },
      {
        path: '**',
        loadComponent: () => import('../../../pages/not-found/not-found.component')
      },
    ],
  },
];
export default adminPanelRoute
