import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LogoSwoComponent} from "../../../shared/logo-swo/logo-swo.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoSwoComponent
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
