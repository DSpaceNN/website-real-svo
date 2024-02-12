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
