import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel-sub-header',
  standalone: true,
  imports: [],
  template: `
    <div class="flex justify-between pl-[24px] pr-[40px] py-[30px] border-b-[1px] border-gray-admin ">
        <ng-content select="[title]"></ng-content>
      <ng-content select="[btn]"></ng-content>
    </div>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPanelSubHeaderComponent {

}
