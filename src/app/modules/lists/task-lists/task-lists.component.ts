import { Component, OnInit } from '@angular/core';

export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string;

}


@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent implements OnInit {

  public opcion: number = 1;

  public listaElementos: Producto[] = [
    {
      nombre: 'Leche',
      precio: 10,
      descripcion: 'Leche entera'

    },
    {
      nombre: 'Carne',
      precio: 20,
      descripcion: 'Carne de cerdo'
    },
    {
      nombre: 'Mantequilla',
      precio: 8,
      descripcion: 'Mantequilla dietetica'
    },
    {
      nombre: 'Yogurt',
      precio: 12,
      descripcion: 'Yogurt de mora chiveria'
    }

  ]
  public cargando: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

  cambiarCargando() {

    this.cargando = !this.cargando;

  }

  escogerOpcion(opcionEscogida: number) {
    this.opcion = opcionEscogida;

  }



}
