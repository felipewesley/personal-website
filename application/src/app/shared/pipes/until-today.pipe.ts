import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'until-today'
})
export class UntilTodayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
