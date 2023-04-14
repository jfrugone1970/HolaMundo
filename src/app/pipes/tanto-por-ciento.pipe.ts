import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tantoPorCiento'
})
export class TantoPorCientoPipe implements PipeTransform {

  transform(value: any, args: any): any {

    let x: any = args / 100;

    return value * x;
  }

}
