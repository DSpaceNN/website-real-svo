import {Route, Routes} from "@angular/router";

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'questions',
    pathMatch: 'full',

  },
  {
    path: 'questions',
    loadComponent: () => import('../widgets/sub-header/sub-header.component')
  },

  {
    path: 'questions/win',
    loadComponent: () => import('../widgets/win-quest/win-quest.component')
  },

  {
    path: '**', loadComponent: () => import("../pages/quest-failed/ui/quest-failed.component")
  }
];
