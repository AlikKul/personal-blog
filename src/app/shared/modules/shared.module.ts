import { NgModule } from '@angular/core';
import { DateConvertPipe } from '../pipes/date-convert.pipe';

@NgModule({
  declarations: [
    DateConvertPipe
  ],
  imports: [],
  exports: [
    DateConvertPipe
  ]
})
export class SharedModule {}
