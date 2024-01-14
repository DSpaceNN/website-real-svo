import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LineWhiteComponent} from "../../shared/ui/line-white/line-white.component";
import {TitleComponent} from "../../shared/ui/title/title.component";

@Component({
  selector: 'app-title-and-underline',
  standalone: true,
  imports: [
    TitleComponent,
    LineWhiteComponent
  ],
  templateUrl: './title-and-underline.component.html',
  styleUrl: './title-and-underline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleAndUnderlineComponent {

}
