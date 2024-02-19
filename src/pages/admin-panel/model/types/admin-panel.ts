export interface ITabs {
  tabUrl:string,
  description:string
}
export enum AdminRoutes {
  SURVEY = 'survey',
  CREATE_SURVEY = 'create-survey',
  CREATE_SURVEY2 = 'change-survey',
  CREATE_SURVEY3 = 'create-survey3',
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
