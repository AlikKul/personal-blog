import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateConvert'})
export class DateConvertPipe implements PipeTransform {
  transform(date: string): Date {
    return new Date(date);
  }
}
