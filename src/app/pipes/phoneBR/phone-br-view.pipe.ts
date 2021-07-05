import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneBrView'
})
export class PhoneBrViewPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
