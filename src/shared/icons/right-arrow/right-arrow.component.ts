import { Component } from '@angular/core';

@Component({
  selector: 'app-right-arrow',
  standalone: true,
  imports: [],
  template: `
    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
      <path d="M12.15 4.99999L1 4.99999C0.716667 4.99999 0.479167 5.09582 0.2875 5.28749C0.0958333 5.47915 0 5.71665 0 5.99999C0 6.28332 0.0958333 6.52082 0.2875 6.71249C0.479167 6.90415 0.716667 6.99999 1 6.99999L12.15 6.99999L9.3 9.84999C9.1 10.05 9.00417 10.2833 9.0125 10.55C9.02083 10.8167 9.11667 11.05 9.3 11.25C9.5 11.45 9.7375 11.5542 10.0125 11.5625C10.2875 11.5708 10.525 11.475 10.725 11.275L15.3 6.69999C15.4 6.59999 15.4708 6.49165 15.5125 6.37499C15.5542 6.25832 15.575 6.13332 15.575 5.99999C15.575 5.86665 15.5542 5.74165 15.5125 5.62499C15.4708 5.50832 15.4 5.39999 15.3 5.29999L10.725 0.724988C10.525 0.524988 10.2875 0.429155 10.0125 0.437489C9.7375 0.445822 9.5 0.549989 9.3 0.749989C9.11667 0.949988 9.02083 1.18332 9.0125 1.44999C9.00417 1.71665 9.1 1.94999 9.3 2.14999L12.15 4.99999Z" fill="#161616"/>
    </svg>
  `,
  styles: ``
})
export class RightArrowComponent {

}
