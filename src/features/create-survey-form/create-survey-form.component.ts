  import {ChangeDetectionStrategy, Component, effect, EventEmitter, inject, OnInit, Output} from '@angular/core';
  import {CREATE_SURVEY_FORM_CONTROL, ICreateSurveyForm} from "./model/types/create-survey-form.type";
  import {CurrentStepQuestionComponent} from "../../shared/ui/current-step-question/current-step-question.component";
  import {InputAdminPanelComponent} from "../../shared/ui/input-admin-panel/input-admin-panel.component";
  import {NgClass} from "@angular/common";
  import {LineLightGrayComponent} from "../../shared/ui/line-light-gray/line-light-gray.component";
  import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
  import {CloseIconComponent} from "../../shared/icons/close-icon/close-icon.component";
  import {CreateSurveyService} from "../../pages/admin-panel/model/services/create-survey.service";
  import {takeUntil} from "rxjs";
  import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-create-survey-form',
  standalone: true,
  imports: [
    CurrentStepQuestionComponent,
    InputAdminPanelComponent,
    NgClass,
    LineLightGrayComponent,
    ReactiveFormsModule,
    CloseIconComponent
  ],
  template: `
    <form [formGroup]="createSurveyForm">
      <div class="flex gap-8 max-w-[700px]" >
      <app-current-step-question [step]="1"></app-current-step-question>
      <div class="flex flex-col gap-2 w-full">
        <h2>Введите название анкеты</h2>
        <div class="flex flex-col gap-2 w-full">
          <div class="border border-gray-admin p-2 rounded-[8px] flex items-center ">
            <input maxlength="40" formControlName="name" placeholder="Например, Карточка 03..."  class="w-full focus:outline-0" type="text">
            @if(this.createSurveyForm.get(CREATE_SURVEY_FORM_CONTROL.NAME)?.value) {
              <close-icon (click)="clearInput(CREATE_SURVEY_FORM_CONTROL.NAME)" ></close-icon>
            }
          </div>
        </div>
      </div>
      </div>
      <hr class="my-6">
      <div class="flex gap-8 max-w-[700px]" >
        <app-current-step-question     [step]="2"></app-current-step-question>
        <div class="flex flex-col gap-2 w-full">
          <h2>Введите номер анкеты</h2>
          <div class="border border-gray-admin p-2 rounded-[8px] flex items-center ">
            <input maxlength="40" formControlName="slug" placeholder="Например, 03..." class="w-full focus:outline-0" type="text">
            @if(this.createSurveyForm.get(CREATE_SURVEY_FORM_CONTROL.SLUG)?.value) {
              <close-icon (click)="clearInput(CREATE_SURVEY_FORM_CONTROL.SLUG)" ></close-icon>
            }
          </div>
          @if(createSurveyForm.controls.slug.hasError('pattern')) {
            <h1 class="text-red-600"> Номер анкеты должен состоять только из латинских букв и цифр без пробелов и специальных символов.</h1>
          }
        </div>
      </div>
    </form>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateSurveyFormComponent implements OnInit{
  @Output() formState = new EventEmitter<boolean>();

  private _createSurveyService = inject(CreateSurveyService)
  ngOnInit(): void {
    this.setSurveyData();
    this.createSurveyForm.valueChanges.subscribe(values => {
      const isNameValid = !!values.name && this.createSurveyForm.controls.name.valid;
      const isSlugValid = !!values.slug && this.createSurveyForm.controls.slug.valid;
      this.formState.emit(isNameValid && isSlugValid);
    });
  }
  constructor() {
    effect(() => {
      this.setSurveyData();
    });
  }
  private setSurveyData() {
    const { name, slug } = this._createSurveyService.surveyStorage();
    this.createSurveyForm.setValue({name, slug});
  }
  readonly createSurveyForm:FormGroup<ICreateSurveyForm>  = new FormGroup<ICreateSurveyForm>({
    name: new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(2),

      ]),
      nonNullable: true,
    }),
    slug: new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z0-9]*$'),
      ]),
      nonNullable: true,
    }),
  });
  clearInput(currentControl:CREATE_SURVEY_FORM_CONTROL) {
    this.createSurveyForm.get(currentControl)?.reset()
  }
  protected readonly CREATE_SURVEY_FORM_CONTROL = CREATE_SURVEY_FORM_CONTROL;
}
