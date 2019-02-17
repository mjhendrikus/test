import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gmt'
})
export class GmtPipe implements PipeTransform {

  transform(value: any): any {

console.log('PIPE ---')
console.log(value)

  if (typeof value === 'string') {
    const regex = /(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s+\d{1,2},\s+\d{4}/g;
    const isAppDateFormat = regex.test(value);
    const isSuffixGMT = value.substr(-3) === 'GMT';
    if (isAppDateFormat && isSuffixGMT) {
        return value;
    }
    else {return '-'}
    }
  }

}
