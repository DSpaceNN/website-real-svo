import { DateTime } from 'luxon';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateOnly',
  standalone: true
})
export class DateOnlyPipe implements PipeTransform {
  transform(value: string): string {
    return DateTime.fromISO(value).toFormat('dd.MM.yyyy');
  }
}

@Pipe({
  name: 'timeOnly',
  standalone: true
})
export class TimeOnlyPipe implements PipeTransform {
  transform(value: string): string {
    return DateTime.fromISO(value).toFormat('HH:mm');
  }
}
