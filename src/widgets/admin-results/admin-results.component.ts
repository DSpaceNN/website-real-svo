import {ChangeDetectionStrategy, Component, computed, inject, OnInit, signal, ViewChild} from '@angular/core';
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
import {PaginatorModule} from "primeng/paginator";
import {RightArrowComponent} from "../../shared/icons/right-arrow/right-arrow.component";
import {AdminResultDropdownComponent} from "../../features/admin-result-dropdown/admin-result-dropdown.component";
import {AdminStatusPrizeComponent} from "../../features/admin-status-prize/admin-status-prize.component";
import {ResultStatus, Sorting, SortingNameTime} from "./model/types/survey-result";
import {AdminDropdownComponent} from "../../features/admin-dropdown/admin-dropdown.component";
import {SearchIconComponent} from "../../shared/icons/search-icon/search-icon.component";
import {SortingIconComponent} from "../../shared/icons/sorting-icon/sorting-icon.component";

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
    ToggleButtonComponent,
    PaginatorModule,
    RightArrowComponent,
    AdminResultDropdownComponent,
    AdminStatusPrizeComponent,
    AdminDropdownComponent,
    SearchIconComponent,
    SortingIconComponent
  ],
  template: `
    <app-admin-panel-sub-header>
      <h2 title class="text-[24px] font-bold text-black-btn">Результаты</h2>
    </app-admin-panel-sub-header>
    <section class="mx-6">
      <app-admin-panel-sub-card>
    <div class="flex justify-between w-full">
      <div class="min-w-[400px]">
        <app-input-admin-panel placeholder="Поиск по уникальному коду" (inputValue)="updateFilterValue($event)">
          <div icon class="pr-1">
            <app-search-icon></app-search-icon>
          </div>

</app-input-admin-panel>
      </div>
        <div class="flex gap-1">
          <app-toggle-button (changedInputSwitch)="resetCurrentPage()">
          </app-toggle-button>
          <h2 class="text-[16px] text-gray-admin">Ожидающие получения</h2>
        </div>
    </div>

      </app-admin-panel-sub-card>
    <table matSortActive="creationTime" matSortDisableClear    matSortDirection='desc' (matSortChange)="onSortChange($event)"  matSort mat-table [dataSource]="surveyResults()">
      <!-- Weight Column -->
      <ng-container  matColumnDef="creationTime">
        <th   mat-sort-header   mat-header-cell *matHeaderCellDef> Дата и время
    <app-sorting-icon [sortingStatus]="sortingStatus()"></app-sorting-icon>
        </th>
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

        <td mat-cell *matCellDef="let element">
          @if(element.isSuccess) {
          <h2>  {{element.surveyName}}</h2>
          } @else {
            <app-admin-result-dropdown [answers]="{title: element.surveyName, answers: element.answers}"></app-admin-result-dropdown>
          }
        </td>
      </ng-container>

      <!-- Symbol Column -->
      <ng-container matColumnDef="result">
        <th mat-header-cell *matHeaderCellDef>Результат</th>
        <td mat-cell *matCellDef="let element"> {{ element.isSuccess ? 'Положительный' : 'Отрицательный' }}</td>
      </ng-container>

      <ng-container matColumnDef="resultStatus">
        <th mat-header-cell    *matHeaderCellDef> Статус приза
        </th>
        <td   mat-cell *matCellDef="let element">
           @if(element.resultStatus !== ResultStatus.AwaitingReceipt) {
             <app-admin-status-prize [statusPrize]="element.resultStatus" ></app-admin-status-prize>
           } @else {
           <app-admin-dropdown [surveyId]="element.code" class="pl-1 block" [currentSurveyResultId]="element.id"></app-admin-dropdown>
           }
        </td>
      </ng-container>


      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
    @if(totalCountResult()) {
      <div class="absolute bottom-4 left-1/2">
        <p-paginator  (onPageChange)="onPageChange($event)" [first]="currentPage" [rows]="6" [totalRecords]="totalCountResult()"></p-paginator>
        <h2 class="text-center text-gray-admin">Всего результатов:{{totalCountResult()}}</h2>
      </div>

    }
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
    ::ng-deep.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
      background-color: #161616;
      color: white;
    }
    ::ng-deep.mat-sort-header-arrow {
      display: none;
    }
  `,

})
export default class AdminResultsComponent implements OnInit{
  public currentPage = 0;
  // __________________________________________________________________________
  private surveyResultService = inject(SurveyResultService)
  public readonly totalCountResult = this.surveyResultService.totalCountSurvey
  public displayedColumns: string[] = ['creationTime', 'code', 'name', 'result', 'resultStatus'];
  public sortingStatus = signal<boolean>(false)
  public surveyResults = this.surveyResultService.surveyResult
  @ViewChild(MatSort) sort!: MatSort;
  // __________________________________________________________________________

  onPageChange(event: any){
    this.currentPage = event.first
    this.surveyResultService.setSkipCount(event.first)
    this.surveyResultService.setTakeCount(event.rows)
    this.surveyResultService.getSurveyResults({})
  }
  // __________________________________________________________________________

  ngOnInit(): void {
    this.surveyResultService.setSortingValue({active: '',direction: ''})
    this.surveyResultService.setIsAwaitingReceipt(true)
    this.surveyResultService.setSkipCount(0)
    this.surveyResultService.setFilter('')
    this.surveyResultService.getSurveyResults({})
  }
  // __________________________________________________________________________

  updateFilterValue(value:string) {
    this.surveyResultService.setFilter(value)
    this.surveyResultService.setSkipCount(0)
    this.resetCurrentPage()
    this.surveyResultService.getSurveyResults({})
  }
  // __________________________________________________________________________

  resetCurrentPage() {
    this.currentPage = 1;
  }
  // __________________________________________________________________________

  onSortChange(event:Sorting) {
    this.surveyResultService.setSortingValue(event)
    this.surveyResultService.getSurveyResults({})
    this.sortingStatus.update((v) => !v)
  }
  protected readonly ResultStatus = ResultStatus;
}
