import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {TextAreaComponent} from "../text-area/text-area.component";

@Component({
  selector: 'app-drag-and-drop-wrapper',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag,
    TextAreaComponent
  ],
  template: `
    <div cdkDropList class="example-list" (cdkDropListDropped)="drop($event)">
      @for (movie of movies; track movie) {
        <div class="example-box" cdkDrag>{{movie}}</div>
      }
    </div>
  `,
  styles: `
    .example-list {
      width: 500px;
      max-width: 100%;
      border: solid 1px #ccc;
      min-height: 60px;
      display: block;
      background: white;
      border-radius: 4px;
      overflow: hidden;
    }

    .example-box {
      padding: 20px 10px;
      border-bottom: solid 1px #ccc;
      color: rgba(0, 0, 0, 0.87);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      cursor: move;
      background: white;
      font-size: 14px;
    }

    .cdk-drag-preview {
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .cdk-drag-placeholder {
      opacity: 0;
    }

    .cdk-drag-animating {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    .example-box:last-child {
      border: none;
    }

    .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragAndDropWrapperComponent {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
