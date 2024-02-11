import {AdminRoutes, ITabs} from "../types/admin-panel";

export const ADMIN_PAGE_ROUTING:ITabs[] = [
  {
    tabUrl: AdminRoutes.CREATE_SURVEY,
    description: 'Создание анкеты'
  },
  {
    tabUrl: AdminRoutes.CREATE_SURVEY2,
    description: 'Создание анкеты2'
  },
  {
    tabUrl: AdminRoutes.CREATE_SURVEY3,
    description: 'Создание анкеты3'
  },
]
