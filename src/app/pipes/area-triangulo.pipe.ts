/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaTriangulo'
})

// Pipe para calcular el area de un Triangulo

export class AreaTrianguloPipe implements PipeTransform {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any, args: any): any {

    const alt: any = parseFloat(args);

    return ((value * alt) / 2);
  }

}
