export interface ISurvey {
  name:string,
  slug:string
  id:string
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

}
export type question  = {
  questionText: string,
  sequence:number,
  questionType:number
  options:options[],
  id:string
}
export interface SendResultSurvey  {
  surveyId: string,
  answers:sendResultAnswer[]
}
export interface SendResultSurveyDto {
  isSuccess:boolean,
  code:string,
  id:string
}
export type sendResultAnswer = {
  questionId:string,
  selectedOptions: string[]
}
export interface ISurveySlugDto {
  result: {
    slug:string,
    id:string,
    questions:question[],
  },
  errors:any
}
