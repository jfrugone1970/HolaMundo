import { Pipe, PipeTransform } from '@angular/core';
import { IJugador } from '../models/jugador.interface';

@Pipe({
  name: 'calcularPuntuacion'
})
export class CalcularPuntuacionPipe implements PipeTransform {

  transform(jugador: IJugador): string {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let puntuacionTotal: any = 0;

    jugador.puntos.forEach((puntuacion) => {

        puntuacionTotal += puntuacion;

    })

    return `${jugador.nombre} ha conseguido ${puntuacionTotal} puntos en total`;
  }

}
