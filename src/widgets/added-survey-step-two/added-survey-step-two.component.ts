import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {TextAreaComponent} from "../../shared/ui/text-area/text-area.component";
import {CurrentStepQuestionComponent} from "../../shared/ui/current-step-question/current-step-question.component";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {DragTwoIconComponent} from "../../shared/icons/drag-two-icon/drag-two-icon.component";
import {
  AddedSurveyQuestionsBlockComponent
} from "../../features/added-survey-questions-block/added-survey-questions-block.component";

@Component({
  selector: 'app-added-survey-step-two',
  standalone: true,
  imports: [
    TextAreaComponent,
    CurrentStepQuestionComponent,
    CdkDropList,
    CdkDrag,
    DragTwoIconComponent,
    AddedSurveyQuestionsBlockComponent
  ],
  template: `
    <div cdkDropList (cdkDropListDropped)="drop($event)">
      @for (item of items;track item) {
        <div class="flex gap-1 flex-col" >
          <div class="flex w-full items-start gap-6">
            <app-current-step-question [step]="$index + 1"></app-current-step-question>
            <app-text-area class="w-[760px]" valueLabel="Введите вопрос" cdkDrag>
              <div (click)="toggleShow($index)" text-area-btn class="h-20 w-10 bg-light-gray-admin rounded-[8px] hover:opacity-40 transition-all flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <mask id="mask0_237_8160" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_237_8160)">
                    <path d="M12 10.7999L8.10005 14.6999C7.91672 14.8832 7.68338 14.9749 7.40005 14.9749C7.11672 14.9749 6.88338 14.8832 6.70005 14.6999C6.51672 14.5166 6.42505 14.2832 6.42505 13.9999C6.42505 13.7166 6.51672 13.4832 6.70005 13.2999L11.3 8.6999C11.5 8.4999 11.7334 8.3999 12 8.3999C12.2667 8.3999 12.5 8.4999 12.7 8.6999L17.3 13.2999C17.4834 13.4832 17.575 13.7166 17.575 13.9999C17.575 14.2832 17.4834 14.5166 17.3 14.6999C17.1167 14.8832 16.8834 14.9749 16.6 14.9749C16.3167 14.9749 16.0834 14.8832 15.9 14.6999L12 10.7999Z" fill="#161616"/>
                  </g>
                </svg>
              </div>
              <div   text-area-btn class="h-20 w-10 bg-light-gray-admin rounded-[8px] hover:opacity-40 transition-all flex justify-center items-center">
                <app-drag-two-icon></app-drag-two-icon>
              </div>
            </app-text-area>
          </div>
          @if(showAnswersStatus() || $first) {
            <app-added-survey-questions-block class="max-w-[620px] ml-12"  ></app-added-survey-questions-block>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .cdk-drag {
      cursor: url('http://www.rw-designer.com/cursor-extern.php?id=82009'), auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddedSurveyStepTwoComponent {
  items = Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    value: '',
    show: i === 0
  }));
  showAnswersStatus = signal(false)

  toggleShow(index: number) {
    this.items[index].show = !this.items[index].show;
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  log() {
    console.log(1)
  }
}
