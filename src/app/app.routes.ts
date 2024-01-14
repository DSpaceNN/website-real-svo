import {Route, Routes} from "@angular/router";

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'questions',
  },
  {
    path: 'questions',
    loadComponent: () => import('../widgets/sub-header/sub-header.component').then((c) => c.SubHeaderComponent),
    pathMatch: 'full'
  },
  {
    path: '**', loadComponent: () => import("../pages/quest-failed/ui/quest-failed.component").then((c) => c.QuestFailedComponent)
  }
];
