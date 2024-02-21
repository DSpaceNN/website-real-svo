  import { ChangeDetectionStrategy, Component } from '@angular/core';
  import {ICreateSurveyForm} from "./model/types/create-survey-form.type";
  import {CurrentStepQuestionComponent} from "../../shared/ui/current-step-question/current-step-question.component";
  import {InputAdminPanelComponent} from "../../shared/ui/input-admin-panel/input-admin-panel.component";
  import {NgClass} from "@angular/common";
  import {LineLightGrayComponent} from "../../shared/ui/line-light-gray/line-light-gray.component";

@Component({
  selector: 'app-create-survey-form',
  standalone: true,
  imports: [
    CurrentStepQuestionComponent,
    InputAdminPanelComponent,
    NgClass,
    LineLightGrayComponent
  ],
  template: `
    @for (input of createSurveyFormData; track input) {
      <div class="flex gap-8 max-w-[700px]">
        <app-current-step-question [step]="input.index"></app-current-step-question>
        <div class="flex flex-col gap-2 w-full">
            <h2>{{input.title}}</h2>
          <app-input-admin-panel ></app-input-admin-panel>
          <h3 [ngClass]="{hidden:!input?.description}" class="text-gray-admin">
            {{input.description}}
          </h3>
         @if(!$last) {
           <hr class="my-6" />
         }
        </div>
      </div>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateSurveyFormComponent {
public readonly createSurveyFormData:ICreateSurveyForm[] = [
  {
  title: 'Введите название анкеты',
  index: 1,
  },
  {
    title: 'Введите номер анкеты',
    index: 2,
    description: 'Cтрока по которой идентифицируется анкета, это строка будет зашита в QR коде на приложении'
  }
]
}
