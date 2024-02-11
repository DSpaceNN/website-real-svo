import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [],
  template: `
    <p>
      admin-panel works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AdminPanelComponent {

}
