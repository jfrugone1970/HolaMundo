import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplica'
})
export class MultiplicaPipe implements PipeTransform {

  transform(value: any, args: any): any {

    let x: any = parseFloat(args)
    return value * x;
  }

}
