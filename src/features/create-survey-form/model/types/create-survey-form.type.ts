import {FormControl} from "@angular/forms";

export interface ICreateSurveyForm {
  name: FormControl<string>;
  slug: FormControl<string>;
}
export interface ICreateSurvey {
  name:string,
  slug:string,
  id?:string
}
export enum CREATE_SURVEY_FORM_CONTROL {
NAME = 'name',
SLUG = 'slug'
}
