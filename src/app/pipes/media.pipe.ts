/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Pipe, PipeTransform } from '@angular/core';
import { reduce } from 'rxjs';

@Pipe({
  name: 'media'
})
export class MediaPipe implements PipeTransform {




  transform(value: number[], args: number): number {

    const i:number = args;
    let contador:any = 0;
    let acsuma:any = 0;

    if(value.length < 1) return 0

    if(value.length > 1){

      value.forEach((valor: any) =>{
           acsuma = reduce(valor);
           if(contador < i){
            contador+=1;
           }


      });
    }

    // Eliminando elementos para quedar con un solo elemento
    // donde este la media
    value.pop();

    return value.push(acsuma / contador);
  }

}
