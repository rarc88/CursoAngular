import { Pipe, PipeTransform } from '@angular/core';
import * as linkifyStr from 'linkifyjs/string';

@Pipe({
  name: 'linkifystr'
})
export class LinkifystrPipe implements PipeTransform {

  transform(value: string): string {
    return value ? linkifyStr(value, { target: '_system'}) : value;
  }

}
