import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'preview'})
export class PreviewPipe implements PipeTransform {
  transform(str: string, length: number): string {
    if (str.length > length) {
      return str.slice(0, length) + '...';
    }
    return str;
  }
}
