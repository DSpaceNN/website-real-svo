export interface ITabs {
  tabUrl:string,
  description:string
}
export enum AdminRoutes {
  SURVEY = 'survey',
  CREATE_SURVEY = 'create-survey',
  SURVEY_RESULTS = 'results'
}
export interface AdminLestSidePanelSubMenu {
  title:string,
  id:number,
  active:boolean,
  route?:string
}
export interface AdminLeftSidePanel {
  menuTitle:string,
  subMenu: AdminLestSidePanelSubMenu[]
}
