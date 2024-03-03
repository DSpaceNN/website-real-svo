export interface ISurvey {
  name:string,
  slug:string
  id:string,
  creationTime:string,
  questionCount:number,
}
export interface ISurveyTable {
  name:string,
  slug:string
  id:string,
  creationTime:string,
  questionCount:number,
}
export interface ISurveyDto {
result: {
  totalCount:number,
  items:ISurvey[]
}
errors:null | any
}
export type options = {
  optionText:string,
  id:string
  isSelected:boolean
  isCorrect?:boolean

}
export type optionsStorage = {
  optionText: string,
  isCorrect: boolean,
  id?:string


}
export type question  = {
  questionText: string,
  sequence:number,
  questionType:number
  options:options[],
  id:string
}
export type questionStorage  = {
  surveyId?:string
  questionText: string,
  sequence:number,
  questionType:number
  options:optionsStorage[],
  showAnswers?:boolean
}
export interface SendResultSurvey  {
  surveyId: string,
  answers:sendResultAnswer[]
}
export interface SendResultSurveyDto {
result: {
  isSuccess:boolean,
  code:string,
  id:string
}
errors:any
}
export type sendResultAnswer = {
  questionId:string,
  selectedOptions: string[]
}

export interface GetSurveyForEditDto {
  result: {
    name:string,
    slug:string,
    id:string,
    questions:question[],
  },
  errors:any
}

export interface ISurveySlugDto {
  result: {
    slug:string,
    id:string,
    questions:question[],
  },
  errors:any
}
export interface SurveyFeedbackAnswer {
  questionText:string,
  isCorrect:boolean,
  sequence:number,
  id:string
}
export interface SurveyFeedbackDto {
  result: {
    code:string,
    answers: SurveyFeedbackAnswer[],
    id:string
  }
  errors:any

}
export interface IDeleteSurveyDto {
  id:string
}
export interface filteredDto {
  filter:string,
  skip:number,
  take:number
}
export interface CreateOrEditQuestionDto {
  result:string,
  errors:any
}
