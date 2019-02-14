import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gmt'
})
export class GmtPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
