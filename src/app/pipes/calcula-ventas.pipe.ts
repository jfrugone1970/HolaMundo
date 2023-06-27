import { Pipe, PipeTransform } from '@angular/core';
import { IVendedor } from '../models/vendedor.interface';

@Pipe({
  name: 'calculaVentas'
})
export class CalculaVentasPipe implements PipeTransform {

  transform(vendedor: IVendedor): string {

    let ventasTotal = 0;

    vendedor.ventas.forEach((valor) =>{

       ventasTotal += valor;


    })

    return `${vendedor.nombre} ha conseguido total en ventas ${ventasTotal} en total`;
  }

}
