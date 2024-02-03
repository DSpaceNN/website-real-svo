import {Route, Routes} from "@angular/router";
import QuestWinPreviewComponent from "../pages/quest-win-preview/quest-win-preview.component";

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'questions',
    pathMatch: 'full',

  },
  {
    path: 'questions',
    loadComponent: () => import('../pages/question/question.component')
  },

  {
    path: 'questions/win',
   component: QuestWinPreviewComponent
  },
  {
    path: 'questions/result',
    loadComponent: () => import('../pages/question-result/question-result.component')
  },
  {
    path: 'questions/failed',
    loadComponent: () => import("../pages/quest-failed/ui/quest-failed.component")
  },
  {
    path: 'login',
    loadComponent: () => import("../pages/login-modal/login-modal.component")
  },

  {
    path: '**', loadComponent: () => import("../pages/not-found/not-found.component")
  }
];
