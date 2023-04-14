import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value: any, args: any): any {

    let fact: any = 1;
    let contador: any = args;

    while(contador != 0){

      fact = fact * contador;
      contador -= 1;

    }

    value = fact;


    return value;
  }

}
