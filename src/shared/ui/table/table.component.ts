import {ChangeDetectionStrategy, Component, inject, input, OnInit, ViewChild} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {SurveyService} from "../../../widgets/create-survey/model/service/survey.service";
import {DatePipe} from "@angular/common";
import { DateOnlyPipe, TimeOnlyPipe} from "../../model/utils/date-format.pipe";
import {DeleteIconComponent} from "../../icons/delete-icon/delete-icon.component";
import {EditIconComponent} from "../../icons/edit-icon/edit-icon.component";
import {ConfirmDialog} from "../../model/decorators/confirm-dialog.decorator";
import {
  AdminDeleteSurveyModalComponent
} from "../../../features/admin-delete-survey/admin-delete-survey-modal.component";


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatSort,
    MatSortHeader,
    DatePipe,
    DateOnlyPipe,
    TimeOnlyPipe,
    DeleteIconComponent,
    EditIconComponent
  ],
  template: `
    <table  matSort mat-table [dataSource]="surveys()">
      <ng-container  matColumnDef="creationTime">
        <th mat-sort-header mat-header-cell *matHeaderCellDef> Дата и время</th>
        <td mat-cell  *matCellDef="let element" >
          {{ element.creationTime | dateOnly }}
          <br>
         <span class="text-gray-admin"> {{ element.creationTime | timeOnly }}</span>
        </td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="slug">
        <th mat-header-cell *matHeaderCellDef> Slug/QR-код/Ссылка</th>
        <td mat-cell *matCellDef="let element"> {{ element.slug }}</td>
      </ng-container>

      <!-- Weight Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Название анкеты</th>
        <td mat-cell *matCellDef="let element"> {{ element.name }}</td>
      </ng-container>

      <!-- Symbol Column -->
      <ng-container matColumnDef="questionCount">
        <th mat-header-cell *matHeaderCellDef> Количество вопросов</th>
        <td mat-cell *matCellDef="let element"> {{ element.questionCount }}</td>
      </ng-container>

      <ng-container matColumnDef="edit">
        <th mat-header-cell *matHeaderCellDef> Редактировать</th>
        <td mat-cell *matCellDef="let element">
          <div class="w-10 bg-light-gray-admin h-10 flex items-center justify-center  rounded-[8px] cursor-pointer hover:opacity-40 transition-all">
            <app-edit-icon></app-edit-icon>
          </div>
        </td>
      </ng-container>

      <ng-container matColumnDef="delete">
        <th mat-header-cell *matHeaderCellDef> Удалить</th>
         <td mat-cell (click)="delete(element.id)" *matCellDef="let element" >
           <div class="w-10 bg-light-gray-admin h-10 flex items-center justify-center rounded-[8px] cursor-pointer hover:opacity-40 transition-all">
             <app-delete-icon></app-delete-icon>
           </div>
         </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>


  `,
  styles: `
    .mdc-data-table__cell, .mdc-data-table__header-cell {
     padding: 12px 0;
      color:  #8B8B8B;
      font-weight: 400;
      font-size: 18px;
    }

    td {
      color: #161616;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 135%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableComponent implements OnInit{
  private _surveyService = inject(SurveyService)

  ngOnInit(): void {
    this._surveyService.getSurvey()
  }
  @ConfirmDialog(AdminDeleteSurveyModalComponent, )
  delete(id:string) {
  this._surveyService.deleteSurvey(id)
  }
  public readonly surveys = this._surveyService.surveys

  @ViewChild(MatSort) sort!: MatSort; // Add this
  // displayedColumns = input.required<string[]>()
  public displayedColumns: string[] = ['creationTime', 'slug', 'name', 'questionCount', 'edit', 'delete' ];
}
