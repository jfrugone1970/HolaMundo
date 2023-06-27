/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tantoPorCiento'
})
export class TantoPorCientoPipe implements PipeTransform {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any, args: any): any {

    // eslint-disable-next-line prefer-const
    let x: any = args / 100;

    return value * x;
  }

}
