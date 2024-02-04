import { Component } from '@angular/core';

@Component({
  selector: 'app-circle-animation',
  standalone: true,
  imports: [],
  template: `
 <div>
   <!--  ECLIPSE SMALL-->
   <div class="eclipse_small">
     <svg xmlns="http://www.w3.org/2000/svg" width="66" height="69" viewBox="0 0 66 69" fill="none">
       <g filter="url(#filter0_f_2938_27988)">
         <circle cx="31.0908" cy="34.0889" r="31.0908" transform="rotate(-90 31.0908 34.0889)" fill="url(#paint0_radial_2938_27988)" fill-opacity="0.7"/>
       </g>
       <defs>
         <filter id="filter0_f_2938_27988" x="-2.84491" y="0.155088" width="67.8715" height="67.8695" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
           <feFlood flood-opacity="0" result="BackgroundImageFix"/>
           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
           <feGaussianBlur stdDeviation="1.42246" result="effect1_foregroundBlur_2938_27988"/>
         </filter>
         <radialGradient id="paint0_radial_2938_27988" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(31.0908 34.0889) rotate(90) scale(31.0908)">
           <stop stop-color="#FF2222"/>
           <stop offset="1" stop-color="#FF2222" stop-opacity="0"/>
         </radialGradient>
       </defs>
     </svg>
   </div>
   <div class="eclipse_major">
     <svg xmlns="http://www.w3.org/2000/svg" width="161" height="162" viewBox="0 0 161 162" fill="none">
       <g filter="url(#filter0_f_2938_27989)">
         <circle cx="80.4" cy="81.312" r="76.3209" transform="rotate(-90 80.4 81.312)" fill="url(#paint0_radial_2938_27989)" fill-opacity="0.7"/>
       </g>
       <defs>
         <filter id="filter0_f_2938_27989" x="0.0317836" y="0.94487" width="160.736" height="160.735" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
           <feFlood flood-opacity="0" result="BackgroundImageFix"/>
           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
           <feGaussianBlur stdDeviation="2.02366" result="effect1_foregroundBlur_2938_27989"/>
         </filter>
         <radialGradient id="paint0_radial_2938_27989" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80.4 81.312) rotate(90) scale(76.3209)">
           <stop stop-color="#FF2222"/>
           <stop offset="1" stop-color="#FF2222" stop-opacity="0"/>
         </radialGradient>
       </defs>
     </svg>
   </div>
   <!--  ECLIPSE MAJOR-->

   <div class="eclipse_minor">
     <svg xmlns="http://www.w3.org/2000/svg" width="95" height="97" viewBox="0 0 95 97" fill="none">
       <g filter="url(#filter0_f_2938_27987)">
         <circle cx="49.2314" cy="48.4092" r="44.2314" transform="rotate(-90 49.2314 48.4092)" fill="url(#paint0_radial_2938_27987)" fill-opacity="0.7"/>
       </g>
       <defs>
         <filter id="filter0_f_2938_27987" x="0.952682" y="0.13237" width="96.5575" height="96.5556" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
           <feFlood flood-opacity="0" result="BackgroundImageFix"/>
           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
           <feGaussianBlur stdDeviation="2.02366" result="effect1_foregroundBlur_2938_27987"/>
         </filter>
         <radialGradient id="paint0_radial_2938_27987" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.2314 48.4092) rotate(90) scale(44.2314)">
           <stop stop-color="#FF2222"/>
           <stop offset="1" stop-color="#FF2222" stop-opacity="0"/>
         </radialGradient>
       </defs>
     </svg>
   </div>
 </div>
  `,
 styleUrls: ["./circle-animation.component.scss"]
})
export class CircleAnimationComponent {

}
