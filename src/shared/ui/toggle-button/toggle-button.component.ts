import {Component, EventEmitter, inject, input, OnInit, Output} from '@angular/core';
import {InputSwitchModule} from "primeng/inputswitch";
import {FormsModule} from "@angular/forms";
import {SurveyResultService} from "../../../widgets/admin-results/model/services/survey-result.service";

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [
    InputSwitchModule,
    FormsModule
  ],
  template: `
    <p-inputSwitch styleClass="switch" (ngModelChange)="changeStatus($event)" [(ngModel)]="statusInputSwitch" ></p-inputSwitch>
  `,
  styles: `

    ::ng-deep.p-inputswitch .p-inputswitch-slider:before {
      background-color: #8B8B8B;
    }

    ::ng-deep.p-inputswitch.p-inputswitch-checked  .p-inputswitch-slider:before {
      background-color: #161616;

    }

    ::ng-deep.p-inputswitch .p-inputswitch-slider {
      background-color: white;
      border: 1px solid #8B8B8B;
    }

  `
})
export class ToggleButtonComponent{


  private _surveyResultService = inject(SurveyResultService)
  public readonly IsAwaitingReceipt = this._surveyResultService.IsAwaitingReceipt
  // __________________________________________________________________________

  @Output() changedInputSwitch = new EventEmitter<void>()
  public statusInputSwitch = true
  // __________________________________________________________________________

  changeStatus (event:boolean) {
    this._surveyResultService.setSkipCount(0)
    this._surveyResultService.setIsAwaitingReceipt(event)
    this._surveyResultService.getSurveyResults({})
    this.changedInputSwitch.emit()
  }
  // __________________________________________________________________________

}
