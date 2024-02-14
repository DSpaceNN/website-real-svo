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
//{
//   "result": {
//     "code": "000007",
//     "answers": [
//       {
//         "questionText": "Вопрос 1",
//         "isCorrect": false,
//         "sequence": 1,
//         "id": "6779bbcd-1567-42d5-9dac-834ebbc8e93b"
//       }
//     ],
//     "id": "2f639ce4-d6b1-4c8c-a72c-b0237301c6d6"
//   },
//   "errors": null
// }
