import { Component, OnInit } from '@angular/core';
import { MultiplicaPipe } from 'src/app/pipes/multiplica.pipe';
import { TantoPorCientoPipe } from 'src/app/pipes/tanto-por-ciento.pipe';
import { CalcularPuntuacionPipe } from 'src/app/pipes/calcular-puntuacion.pipe';
import { MediaPipe } from 'src/app/pipes/media.pipe';
import { FactorialPipe } from 'src/app/pipes/factorial.pipe';
// Importamos el modelo IJugador
import { IJugador } from 'src/app/models/jugador.interface';
import { IContacto } from 'src/app/models/contacto.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.css']
})
export class EjemploPipesComponent implements OnInit {

  dob: Date = new Date(1970,3,20);
  cambio: boolean = true;
  nombre: string = "Lcdo. Jose Fernando Frugone Jaramillo";
  dato: any = 60;
  valor: any = 8;
  numero: any = 0;
  numero_fac: any = 0;
  valor_decre: any = 0;
  arreglo: any[] = [];
  limite: any = 4;
  contador: any = 0;
  precioCarrito: number = 100;

  // Para Pipe para decimales
  numero_PI: number = 3.14159678564587;

  // Ejemplo Pipes
  jugador1: IJugador = {
    nombre: 'Martin',
    puntos: [10, 20, 40, 0]

  }

  jugador2: IJugador = {
    nombre: 'Pepe',
    puntos: [0, 80, 10, 5]
  }

  // Otro ejemplo para Pipes
  persona: IContacto = {
    id: 0,
    nombres: 'Martin',
    apellidos: 'San Jose',
    edad: 30,
    email: 'martin@imaginagroup.com'
  }


  constructor() {}

  ngOnInit(): void {


  }

  get dateFormat() {
    return this.cambio ? 'shortDate' : 'fullDate'
  }

  guardaNumero() {
    this.arreglo.push(this.numero);
    this.contador += 1;

  }

  ArrancaFact() {
    this.valor_decre = this.numero_fac - 1;

  }

  cambiarFormato() {

    this.cambio = !this.cambio;


  }

}
