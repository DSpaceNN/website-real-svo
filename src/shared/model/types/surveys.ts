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
}
export type question  = {
  questionText: string,
  sequence:number,
  questionType:number
  options:options[]
}
export interface ISurveySlugDto {
  result: {
    slug:string,
    questions:question[]
  },
  id:string,
  errors:any
}
