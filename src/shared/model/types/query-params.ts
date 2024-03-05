export enum QueryParamsQuestionOrAnswers {
  CREATE_STEP_FIRST = 'Добавьте название и номер анкеты',
  CREATE_STEP_SECOND = 'Добавьте вопросы и ответы, укажите правильные',
  CREATE_SUB_HEADER = 'Добавление анкеты',
  EDIT_STEP_FIRST = 'Название и номер анкеты',
  EDIT_STEP_SECOND = 'Вопросы и ответы',
  EDIT_SUB_HEADER = 'Редактирование анкеты',
  CREATE_MODAL_DESCRIPTION = 'Анкета была успешно добавлена. Вы можете редактировать или удалить анкету при необходимости',
  EDIT_MODAL_DESCRIPTION = 'Информация была успешно сохранена'
}
export interface IQueryParamsQuestionOrAnswers {
  step_first:string,
  step_second:string,
  sub_header:string,
  modal_description:string
}

export const createParams:IQueryParamsQuestionOrAnswers = {
  step_first: QueryParamsQuestionOrAnswers.CREATE_STEP_FIRST,
  step_second: QueryParamsQuestionOrAnswers.CREATE_STEP_SECOND,
  sub_header: QueryParamsQuestionOrAnswers.CREATE_SUB_HEADER,
  modal_description: QueryParamsQuestionOrAnswers.CREATE_MODAL_DESCRIPTION
}

export const editParams:IQueryParamsQuestionOrAnswers = {
  step_first: QueryParamsQuestionOrAnswers.EDIT_STEP_FIRST,
  step_second: QueryParamsQuestionOrAnswers.EDIT_STEP_SECOND,
  sub_header: QueryParamsQuestionOrAnswers.EDIT_SUB_HEADER,
  modal_description: QueryParamsQuestionOrAnswers.EDIT_MODAL_DESCRIPTION

}
