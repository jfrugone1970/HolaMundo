import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaTriangulo'
})

// Pipe para calcular el area de un Triangulo

export class AreaTrianguloPipe implements PipeTransform {

  transform(value: any, args: any): any {

    let alt: any = parseFloat(args);

    return ((value * alt) / 2);
  }

}
