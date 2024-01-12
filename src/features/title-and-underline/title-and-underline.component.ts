import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TitleComponent} from "../../shared/title/title.component";
import {LineWhiteComponent} from "../../shared/line/ui/line-white/line-white.component";

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
