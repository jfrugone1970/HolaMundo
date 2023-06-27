import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value: number, args: number): number {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fact: any = 1;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let contador: any = args;

    while(contador != 0){

      fact = fact * contador;
      contador -= 1;

    }

    value = fact;


    return value;
  }

}
