import {Routes} from "@angular/router";
import AddedSurveyStepTwoComponent from "../../../widgets/added-survey-step-two/added-survey-step-two.component";

const adminPanelRoute: Routes = [
  {
    path: 'surveys',
    loadComponent: () => import('../../../pages/admin-panel/admin-panel.component'),
    children: [
      {
        path: 'survey',
        loadComponent: () => import('../../../pages/survey/survey.component'),
        children: [
          {
            path: '',
            outlet: 'currentSurveyStatusStep',
            children: [
              {
                path: 'items',
                loadComponent: () => import('../../../widgets/survey-items/survey-items.component')
              },
              {
                path: 'create-survey',
                loadComponent: () => import('../../../widgets/create-survey/create-survey.component')
              },
              {
                path: 'create-survey-questions-answers',
                loadComponent: () => import("../../../widgets/create-questions/create-questions.component")
              }
            ]
          }
        ]

      },
      {
        path: 'change-survey',
        loadComponent: () => import("../../../widgets/change-survey/change-survey.component"),

      },
      {
        path: 'results',
        loadComponent: () => import("../../../widgets/admin-results/admin-results.component")
      },
      {
        path: '**',
        loadComponent: () => import('../../../pages/not-found/not-found.component')
      },
    ],
  },
];
export default adminPanelRoute
//import {Routes} from "@angular/router";
// import AddedSurveyStepTwoComponent from "../../../widgets/added-survey-step-two/added-survey-step-two.component";
// import SurveyComponent from "../../../pages/survey/survey.component";
//
// const adminPanelRoute: Routes = [
//   {
//     path: '',
//     pathMatch: "full",
//     redirectTo: 'admin-test-panel'
//   },
//
//   {
//     path: 'admin-test-panel',
//     loadComponent: () => import('../../../pages/admin-panel/admin-panel.component'),
//     children: [
//       {
//         path: 'change-survey',
//         loadComponent: () => import("../../../widgets/change-survey/change-survey.component"),
//
//       },
//       {
//         path: 'results',
//         loadComponent: () => import("../../../widgets/admin-results/admin-results.component")
//       },
//       {
//         path: '**',
//         loadComponent: () => import('../../../pages/not-found/not-found.component')
//       },
//       {
//         path: '',
//         outlet: 'd',
//         children: [
//           {
//             path: 'sets1',
//             component: AddedSurveyStepTwoComponent,
//           },
//         ],
//       },
//
//     ],
//   },
//
//   // {
//   //   path: 'survey',
//   //   loadComponent: () => import('../../../pages/survey/survey.component'),
//   //   children: [
//   //     {
//   //       path: '',
//   //       outlet: 'd',
//   //       children: [
//   //         {
//   //           path: 'route1',
//   //           component:  AddedSurveyStepTwoComponent
//   //           // loadComponent: () => import('../../../widgets/added-survey-step-two/added-survey-step-two.component')
//   //         }
//   //       ]
//   //
//   //     },
//   //   ]
//   // },
//
//
//
// ];
// export default adminPanelRoute
