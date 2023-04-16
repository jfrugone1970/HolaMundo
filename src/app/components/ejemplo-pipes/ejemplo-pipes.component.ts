import { Component, OnInit } from '@angular/core';
import { MultiplicaPipe } from 'src/app/pipes/multiplica.pipe';
import { TantoPorCientoPipe } from 'src/app/pipes/tanto-por-ciento.pipe';
import { CalcularPuntuacionPipe } from 'src/app/pipes/calcular-puntuacion.pipe';
import { CalculaVentasPipe } from 'src/app/pipes/calcula-ventas.pipe';
import { MediaPipe } from 'src/app/pipes/media.pipe';
import { FactorialPipe } from 'src/app/pipes/factorial.pipe';
import { AreaTrianguloPipe } from 'src/app/pipes/area-triangulo.pipe';
// Importamos el modelo IJugador
import { IJugador } from 'src/app/models/jugador.interface';
import { IContacto } from 'src/app/models/contacto.interface';
// Para Vendedor
import { IVendedor } from 'src/app/models/vendedor.interface';

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

  // Para el area de un triangulo
  base: any = 0;
  altura: any = 0;


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

  // Para ejemplo de vendedor
  vendedor1: IVendedor = {
    nombre: 'Oscar Jose',
    apellido: 'Gavilanes Gonzalez',
    ventas: [800, 120, 340, 240, 120, 78, 1200, 36]
  }

  vendedor2: IVendedor = {
    nombre: 'Jose Gabriel',
    apellido: 'Andrade Solines',
    ventas: [560, 700, 350, 234, 238, 120, 68, 800]
  }

  vendedor3: IVendedor = {
    nombre: 'Maria Jose',
    apellido: 'Castro Andrade',
    ventas: [780, 267, 238, 256, 869, 23, 56, 78]
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
