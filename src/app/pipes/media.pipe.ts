import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media'
})
export class MediaPipe implements PipeTransform {




  transform(value: any, ...args: any[]): any {

    let acsuma: any = 0;
    let contador: any = 1;

    value.array.forEach((dato: any) => {

      acsuma += dato;
      contador += 1;

    });



    return acsuma / contador;
  }

}
