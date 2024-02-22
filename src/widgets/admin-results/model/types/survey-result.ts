export interface ISurveyResultDto {
result: {
  items: [],
  totalCount:number
}
errors:any
}

export interface SurveyResult {
 id:string,
  code:string,
  isSuccess:boolean,
  isProcessed:boolean,
  creationTime:string
}

export interface SurveyResultQueryParams {filter?:string,isSuccess?: boolean, skip?: number, take?: number}

