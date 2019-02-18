import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'gmt'
})
export class GmtPipe implements PipeTransform {

  transform(value: any, format: string = null): string {
    if (typeof value === 'string') {
        // tslint:disable-next-line:max-line-length
        const regex = /(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s+\d{1,2},\s+\d{4}/g;
        const isAppDateFormat = regex.test(value);
        const isSuffixGMT = value.substr(-3) === 'GMT';
        if (isAppDateFormat && isSuffixGMT) {
            return value;
        }
    }

    // Check if it's the Mongo DB date
    if (value && typeof value === 'object' && '$date' in value) {
        value = value['$date'];
    }

    if (value === '-') {
        return '-';
    }

    if (value === 'NA' || value === 'N/A') {
        return value;
    }

    let date: number;
    if (value !== undefined && value !== null) {
        value = value.toString();
        if (value.indexOf('-') === -1) {
            date = parseInt(value, 10);
        } else {
            date = new Date(value).getTime();
        }

        if (format) {
            if (date.toString().length > 10) {
                return moment.unix(date / 1000).utc().format(format);
            } else {
                return moment.unix(date).utc().format(format);
            }
        } else {
            if (date.toString().length > 10) {
                return moment.unix(date / 1000).utc().format('LLL') + ' GMT';
            } else {
                return moment.unix(date).utc().format('LLL') + ' GMT';
            }
        }
    } else {
        return '-';
    }
  }
}
