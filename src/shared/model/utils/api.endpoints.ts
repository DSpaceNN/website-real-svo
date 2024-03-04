import {APICollection, RequestMethods} from "../types/variables";

export const API = {
  CREATE_SURVEY: { url: '/Surveys/CreateOrEditSurvey', method: RequestMethods.POST },
  GET_SURVEY: {url: '/Surveys/GetSurveys', method: RequestMethods.GET},
  DELETE_SURVEY: {url: '/Surveys/DeleteSurvey',method: RequestMethods.DELETE},
  DELETE_QUESTION: {url: '/Surveys/DeleteQuestion',method: RequestMethods.DELETE},
  GET_SURVEY_BY_SLUG: {url:'/UserSurvey/GetSurvey', method: RequestMethods.GET},
  CREATE_SEND_RESULT: {url:'/UserSurvey/SendResult',method: RequestMethods.POST},
  GET_SURVEY_FEEDBACK: {url: '/UserSurvey/GetSurveyFeedback', method: RequestMethods.GET},
  LOGIN: {url: '/TokenAuth/Login', method: RequestMethods.POST},
  SURVEY_RESULT: {url:'/SurveyResults/GetSurveyResults',method: RequestMethods.GET},
  UPDATE_PROCESSED_STATUS: {url:'/SurveyResults/UpdateProcessedStatus',method: RequestMethods.PUT},
  CREATE_OR_EDIT_QUESTIONS: {url: '/Surveys/CreateOrEditQuestion', method: RequestMethods.POST},
  GET_SURVEY_FOR_EDIT: {url: '/Surveys/GetSurveyForEdit', method:RequestMethods.GET}

};

