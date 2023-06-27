import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-ejemplo-animacion',
  templateUrl: './ejemplo-animacion.component.html',
  styleUrls: ['./ejemplo-animacion.component.css'],
  // Metadatos para animacion
  animations: [
    trigger('animaciones', [
      state('active', style({
        transform: 'translate(10px, 20px)'
      })),
      state('inactive', style({
        transform: 'translate(40px, 50px)'
      })),
      state('sube', style({
        transform: 'translateY(10px)'
      })),
      state('baja', style({
        transform: 'translateY(-10px)'
      })),
      state('rotar', style({
        transform: 'rotate(90deg)'
      })),
      state('esquina', style({
        transform: 'translateY(10px)',
        backgroundColor: 'yellow'
      })),
      state('volver', style({
        transform: 'translateY(-10px)',
        backgroundColor: 'yellow'
      })),
      state('ampliar', style({
        transform: 'scale(2,2)',
        backgroundColor: 'green'
      })),
      state('reducir', style({
        transform: 'scale(1,1)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out')),
      transition('active => sube', animate('1000ms ease-in')),
      transition('active => baja', animate('1000ms ease-in')),
      transition('sube => active', animate('1000ms ease-out')),
      transition('active => baja', animate('1000ms ease-in')),
      transition('sube => baja', animate('1000ms ease-in')),
      transition('baja => active', animate('1000ms ease-in')),
      transition('baja => inactive', animate('1000ms ease-out')),
      transition('baja => sube', animate('1000ms ease-in')),
      transition('inactive => sube', animate('1000ms ease-in')),
      transition('sube => inactive', animate('1000ms ease-out')),
      transition('inactive => baja', animate('1000ms ease-in')),
      transition('rotar => sube', animate('1000ms ease-in')),
      transition('rotar => inactive', animate('1000ms ease-out')),
      transition('rotar => active', animate('1000ms ease-in')),
      transition('rotar => baja', animate('1000ms ease-out')),
      transition('volver => esquina', animate('1000ms ease-in')),
      transition('volver => inactive', animate('1000ms ease-out')),
      transition('volver => active', animate('1000ms ease-in')),
      transition('esquina => volver', animate('1000ms ease-out')),
      transition('esquina => active', animate('1000ms ease-in')),
      transition('esquina => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class EjemploAnimacionComponent implements OnInit {

  public estado: string;

  constructor() {

    this.estado = 'inactive';

  }

  ngOnInit(): void {

   // setInterval(() => {

   //   if(this.state == 'active'){
   //     this.state = 'inactive';

   //   }else {
   //     this.state = 'active';

   //   }

   // }, 1000)

   // setTimeout(() => {
   //    this.state = 'active';

   // }, 500)

   console.log('Hola mundo animacion');

  }

  cambiarEstadoActivado() {

    if(this.estado === 'active'){
          this.estado = 'inactive';

    }else {
          this.estado = 'active';

    }

  }

  cambiarEstadoArriba() {
    if(this.estado === 'sube'){
      this.estado = 'baja';

    }else {
      this.estado = 'sube';

    }

  }

  cambiarEstadoPosicion() {
    if(this.estado === 'esquina'){
      this.estado = 'volver';

    }else {
      this.estado = 'esquina';

    }
  }

  activar() {

    this.estado = 'active';


  }

  desactivar() {

    console.log('Desactivar');

  }

  rota() {
    this.estado = 'rotar';

  }

  amplia() {
    this.estado = 'ampliar';

  }

  reduce() {
    this.estado = 'reducir';

  }

  cambiarTamano() {
    if(this.estado === 'reducir'){
      this.estado = 'ampliar';

    }else {
      this.estado = 'reducir';

    }
  }

  cambiarActivo() {
    this.estado = 'active';

  }

  cambiarInactivo() {
    this.estado = 'inactive';

  }

}
