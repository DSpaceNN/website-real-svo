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
    loadComponent: () => import('../pages/quest-win-preview/quest-win-preview.component')
  },
  {
    path: 'questions/result',
    loadComponent: () => import('../pages/question-result/question-result.component')
  },

  {
    path: '**', loadComponent: () => import("../pages/quest-failed/ui/quest-failed.component")
  }
];
