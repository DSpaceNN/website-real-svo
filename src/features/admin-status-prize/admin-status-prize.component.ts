import {Component, computed, input} from '@angular/core';
import {ResultStatus} from "../../widgets/admin-results/model/types/survey-result";

@Component({
  selector: 'app-admin-status-prize',
  standalone: true,
  imports: [],
  template: `
    <div [style.background-color]="color()" class="w-[205px] text-center rounded-[8px] py-1.5">
        <h2 class="text-[16px] text-black font-medium">{{text()}}</h2>
    </div>
  `,
  styles: ``
})
export class AdminStatusPrizeComponent {
  statusPrize = input.required<ResultStatus>()
  text = computed(() => {
  return   this.getStatusLabelAndColor(this.statusPrize()).text
  })
  color = computed(() => {
  return   this.getStatusLabelAndColor(this.statusPrize()).color
  })
  getStatusLabelAndColor(status: ResultStatus) {
    switch (status) {
      case ResultStatus.Received:
        return { text: "Получен", color: "#E2F7D8" };
      case ResultStatus.NotReceived:
        return { text: "Не получен", color: "#FDD" };
      case ResultStatus.NotAvailable:
        return { text: "Не доступен", color: "#F5F5F5" };
      default:
        return { text: "ошибка", color: "#ff0000" };
    }
  }
}
