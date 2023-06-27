/* eslint-disable @typescript-eslint/no-explicit-any */
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

  // Utilizacion de los Pipe
  public multiplica:number | MultiplicaPipe;
  public tantoPorCiento:number | TantoPorCientoPipe;
  public calcularPuntuacion:number | CalcularPuntuacionPipe;
  public calculaVentas:any | CalculaVentasPipe;
  public media:number | MediaPipe;
  public factorial:number | FactorialPipe;
  public areaTriangulo:number | AreaTrianguloPipe;

  dob: Date = new Date(1970,3,20);
  public cambio: boolean;
  public nombre: string;
  public dato: number;
  public valor: number;
  public numero: number;
  public numero_fac: number;
  public valor_decre: number;
  public arreglo: number[];
  public limite: number;
  public contador: number;
  public precioCarrito: number;

  // Para el area de un triangulo
  public base: number;
  public altura: number;


  // Para Pipe para decimales
  public numero_PI: number;

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


  constructor() {
    this.cambio = true;
    this.nombre = "Lcdo. Jose Fernando Frugone Jaramillo";
    this.dato = 60;
    this.valor = 8;
    this.numero = 0;
    this.numero_fac = 0;
    this.valor_decre = 0;
    this.arreglo = [];
    this.limite = 4;
    this.contador = 0;
    this.precioCarrito = 100;

    // Para el area de un triangulo
    this.base = 0;
    this.altura = 0;


  // Para Pipe para decimales
    this.numero_PI = 3.14159678564587;

    // Utilizacion de los Pipe
    this.multiplica = 12;
    this.tantoPorCiento = 0;
    this.calcularPuntuacion = 0;
    this.calculaVentas = 0;
    this.media = 2;
    this.factorial = 0;
    this.areaTriangulo = 0;



  }

  ngOnInit(): void {

    console.log("PIPE");

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
