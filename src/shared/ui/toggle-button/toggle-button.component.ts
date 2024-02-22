import { Component } from '@angular/core';
import {InputSwitchModule} from "primeng/inputswitch";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [
    InputSwitchModule,
    FormsModule
  ],
  template: `
    <p-inputSwitch styleClass="switch" (ngModelChange)="log()" [(ngModel)]="checked"></p-inputSwitch>
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
export class ToggleButtonComponent {
checked:boolean = false
  log () {
    console.log(this.checked)
  }
}
