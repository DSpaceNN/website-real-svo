export interface ISurveyResultDto {
result: {
  items: SurveyResult[],
  totalCount:number
}
errors:any
}

export interface SurveyResult {
  id:string,
  code:string,
  isSuccess:boolean,
  isProcessed:boolean,
  surveyName:string
  resultStatus:number,
  creationTime:string,
  answers: SurveyResultAnswers[]
}
export interface SurveyResultAnswers {
  sequence: number,
  isCorrect: boolean,
  id: string
}
export interface SurveyResultQueryParams {filter?:string,sorting?: string,isAwaitingReceipt?:boolean, skip?: number, take?: number}
export interface SurveyResultDropdownSlug {
  title:string,
  answers:SurveyResultAnswers[]
}
export enum ResultStatus {
  Received,
  NotReceived,
  AwaitingReceipt,
  NotAvailable
}
export interface UpdateProcessedStatusDto {
  surveyResultId:string
  resultStatus:number
}
export interface OptionsDropdownStatus {
  title:string,
  resultStatus:ResultStatus
}
export interface Sorting {active: string, direction: string}
export enum SortingNameTime {
  SORTING_TIME = 'creationTime'
}
