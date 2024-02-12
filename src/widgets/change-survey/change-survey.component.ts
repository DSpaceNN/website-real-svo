import {ChangeDetectionStrategy, Component} from "@angular/core";
import {TitleComponent} from "../../shared/ui/title/title.component";
import {ButtonEventComponent} from "../../shared/ui/button-event/button-event.component";
import {CardComponent} from "../../shared/ui/card/card.component";
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
        <div class="flex justify-start gap-4 flex-wrap">
          @for (item of data; track item.id) {
            <app-card>
              <div text>
                <app-title>Имя: #25</app-title>
                <app-title>Номер: 2123</app-title>
              </div>
              <ng-container btn-container>
                <app-button-event (event)="deleted(item.id)" class="min-w-[150px]">
                  Удалить
                </app-button-event>
                <app-button-event class="min-w-[150px]">
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

export default class ChangeSurveyComponent {
  deleted (id:number) {
    this.data = this.data.filter((i) => i.id !== id )
  }
  private _data: Test[] = [
    {
      id: 1,
      title: '24',
      slug: '№25'

    }, {
      id: 2,
      title: '25',
      slug: '№25'

    }, {
      id: 3,
      title: '26',
      slug: '№25'

    },{
      id: 4,
      title: '27',
      slug: '№25'

    },{
      id: 5,
      title: '28',
      slug: '№25'

    },
  ]


  get data(): Test[] {
    return this._data;
  }

  set data(value: Test[]) {
    this._data = value;
  }
}
