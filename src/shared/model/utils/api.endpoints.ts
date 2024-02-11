import {APICollection, RequestMethods} from "../types/variables";

export const API = {
  CREATE_SURVEY: { url: '/Surveys/CreateOrEditSurvey', method: RequestMethods.POST },
  GET_SURVEY: {url: '/Surveys/GetSurveys', method: RequestMethods.GET}
};

