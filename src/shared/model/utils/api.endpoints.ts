import {APICollection, RequestMethods} from "../types/variables";

export const API = {
  CREATE_SURVEY: { url: '/Surveys/CreateOrEditSurvey', method: RequestMethods.POST },
  GET_SURVEY: {url: '/Surveys/GetSurveys', method: RequestMethods.GET},
  DELETE_SURVEY: {url: '/Surveys/DeleteSurvey',method: RequestMethods.DELETE},
  GET_SURVEY_BY_SLUG: {url:'/UserSurvey/GetSurvey', method: RequestMethods.GET},
  CREATE_SEND_RESULT: {url:'/UserSurvey/SendResult',method: RequestMethods.POST},
  GET_SURVEY_FEEDBACK: {url: '/UserSurvey/GetSurveyFeedback', method: RequestMethods.GET}
};

