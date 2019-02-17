import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textify'
})
export class TextifyPipe implements PipeTransform {

  transform(text: any): any {
    console.log( String(text).length );
    return (text || text === 0 || text === '0') ? text : '-';
  }

}
