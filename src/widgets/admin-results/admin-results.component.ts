import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {DateOnlyPipe, TimeOnlyPipe} from "../../shared/model/utils/date-format.pipe";
import {DeleteIconComponent} from "../../shared/icons/delete-icon/delete-icon.component";
import {EditIconComponent} from "../../shared/icons/edit-icon/edit-icon.component";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {SurveyResultService} from "./model/services/survey-result.service";
import {AdminPanelSubHeaderComponent} from "../../shared/ui/admin-panel-sub-header/admin-panel-sub-header.component";
import {AdminPanelSubCardComponent} from "../../features/admin-panel-sub-card/admin-panel-sub-card.component";
import {InputAdminPanelComponent} from "../../shared/ui/input-admin-panel/input-admin-panel.component";
import {ToggleButtonComponent} from "../../shared/ui/toggle-button/toggle-button.component";

@Component({
  selector: 'app-admin-results',
  standalone: true,
  imports: [
    DateOnlyPipe,
    DeleteIconComponent,
    EditIconComponent,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatSort,
    MatSortHeader,
    MatTable,
    TimeOnlyPipe,
    MatHeaderCellDef,
    AdminPanelSubHeaderComponent,
    AdminPanelSubCardComponent,
    InputAdminPanelComponent,
    ToggleButtonComponent
  ],
  template: `
    <app-admin-panel-sub-header>
      <h2 title class="text-[24px] font-bold text-black-btn">Результаты</h2>
    </app-admin-panel-sub-header>
    <section class="mx-6">
      <app-admin-panel-sub-card>
    <div class="flex justify-between w-full">
      <div class="min-w-[400px]">
        <app-input-admin-panel (inputValue)="updateFilterValue($event)"></app-input-admin-panel>
      </div>
        <div class="flex">
          <app-toggle-button>
          </app-toggle-button>
          <h2>Ожидающие получения</h2>
        </div>
    </div>

      </app-admin-panel-sub-card>
    <table  matSort mat-table [dataSource]="surveyResults()">
      <!-- Weight Column -->
      <ng-container matColumnDef="creationTime">
        <th  mat-sort-header mat-header-cell *matHeaderCellDef> Дата и время</th>
        <td mat-cell  *matCellDef="let element" >
          {{ element.creationTime | dateOnly }}
          <br>
          <span class="text-gray-admin"> {{ element.creationTime | timeOnly }}</span>
        </td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="code">
        <th mat-header-cell *matHeaderCellDef> Уникальный код</th>
        <td mat-cell *matCellDef="let element"> {{ element.code }}</td>
      </ng-container>

      <!-- Weight Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Название анкеты</th>
        <td mat-cell *matCellDef="let element">Карточка 01 </td>
      </ng-container>

      <!-- Symbol Column -->
      <ng-container matColumnDef="result">
        <th mat-header-cell *matHeaderCellDef>Результат</th>
        <td mat-cell *matCellDef="let element"> {{ element.isSuccess ? 'Положительный' : 'Отрицательный' }}</td>
      </ng-container>

      <ng-container matColumnDef="status">
        <th mat-header-cell  *matHeaderCellDef> Статус приза</th>
        <td  mat-cell *matCellDef="let element">
          <div class="w-10 bg-light-gray-admin h-10 flex items-center justify-center  rounded-[8px] cursor-pointer hover:opacity-40 transition-all">
            <app-edit-icon></app-edit-icon>
          </div>
        </td>
      </ng-container>


      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
    </section>
  `,
  styles: `
    .mdc-data-table__cell, .mdc-data-table__header-cell {
     padding: 12px 0;

    }
.mdc-data-table__header-cell {
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
export default class AdminResultsComponent implements OnInit{
  private surveyResultService = inject(SurveyResultService)
  public displayedColumns: string[] = ['creationTime', 'code', 'name', 'result', 'status',];
  public surveyResults = this.surveyResultService.surveyResult
  ngOnInit(): void {
  this.surveyResultService.getSurveyResults({})
  }
  updateFilterValue(value:string) {
   this.surveyResultService.getSurveyResults({filter: value})
  }

}
