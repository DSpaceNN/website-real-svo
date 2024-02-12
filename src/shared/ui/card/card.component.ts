import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="min-w-sm w-full border-2 h-full p-2 flex flex-col justify-center gap-1 ">
      <ng-content select="[text]"></ng-content>
      <div class="flex justify-center gap-4 ">
        <ng-content select="[btn-container]"></ng-content>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

}
