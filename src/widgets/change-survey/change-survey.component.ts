import {ChangeDetectionStrategy, Component, inject, OnInit} from "@angular/core";
import {TitleComponent} from "../../shared/ui/title/title.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {CardComponent} from "../../shared/ui/card/card.component";
import {ConfirmDialog} from "../../shared/model/decorators/confirm-dialog.decorator";
import {ModalChangeComponent} from "../../features/modal-change/modal-change.component";
import {SurveyService} from "../create-survey/model/service/survey.service";
interface Test {
  id:number,
  title:string,
  slug:string
}
@Component({
  selector: 'app-change-survey',
  standalone: true,
  imports: [
    TitleComponent,
    ButtonEventComponent,
    CardComponent
  ],
  template: `
<div>
        <div class="flex justify-start gap-4 flex-wrap ">
          @for (item of surveys(); track item?.id) {
            <app-card>
              <div text>
                <app-title>Имя: {{item.name}}</app-title>
                <app-title>Номер: {{item.slug}}</app-title>
              </div>
              <ng-container btn-container>
                <app-button-event (event)="deleted(item.id)" class="min-w-[150px]">
                  Удалить
                </app-button-event>
                <app-button-event (event)="openModal()" class="min-w-[150px]">
                  Редактировать
                </app-button-event>
              </ng-container>
            </app-card>
          }
        </div>
</div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export default class ChangeSurveyComponent implements OnInit{
  private surveyService = inject(SurveyService)
  public readonly surveys = this.surveyService.surveys
  ngOnInit(): void {
    this.surveyService.getSurvey()
  }

  deleted (id:string) {
    console.log(id)
  }
  @ConfirmDialog(ModalChangeComponent, {
    minWidth: '480px',
  })
  openModal() {
  }

}

