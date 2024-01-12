import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ContainerNumberCardComponent} from "../container-number-card/container-number-card.component";
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'app-unique-number-cart',
  standalone: true,
  imports: [
    ContainerNumberCardComponent,
    TitleComponent
  ],
  templateUrl: './unique-number-cart.component.html',
  styleUrl: './unique-number-cart.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UniqueNumberCartComponent {

}
