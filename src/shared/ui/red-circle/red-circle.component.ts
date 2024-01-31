import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-red-circle',
  standalone: true,
  imports: [],
  template: `
    <div class="flex items-center ">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
      <g filter="url(#filter0_f_3107_21795)">
        <circle cx="15" cy="15.5" r="8" fill="url(#paint0_radial_3107_21795)" fill-opacity="0.8"/>
      </g>
      <defs>
        <filter id="filter0_f_3107_21795" x="0" y="0.5" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_3107_21795"/>
        </filter>
        <radialGradient id="paint0_radial_3107_21795" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 15.5) rotate(14.0362) scale(75.8651)">
          <stop stop-color="#FF2222"/>
          <stop offset="1" stop-color="#FF2222" stop-opacity="0"/>
        </radialGradient>
      </defs>
    </svg>
        <ng-content select="[number-question]"></ng-content>
    </div>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedCircleComponent {

}
