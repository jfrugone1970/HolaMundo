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
      transition('sube => active', animate('1000ms ease-out')),
      transition('active => baja', animate('1000ms ease-in')),
      transition('sube => baja', animate('1000ms ease-in')),
      transition('baja => active', animate('1000ms ease-out')),
      transition('inactive => sube', animate('1000ms ease-in')),
      transition('sube => inactive', animate('1000ms ease-out')),
      transition('inactive => baja', animate('1000ms ease-in')),
      transition('sube => active', animate('1000ms ease-in')),
      transition('sube => inactive', animate('1000ms ease-out')),
      transition('baja => active', animate('1000ms ease-in')),
      transition('baja => inactive', animate('1000ms ease-out')),
      transition('baja => sube', animate('1000ms ease-out'))
    ])
  ]
})
export class EjemploAnimacionComponent implements OnInit {

  state: string = 'inactive';

  constructor() {


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

  }

  cambiarEstadoActivado() {

    if(this.state == 'active'){
          this.state = 'inactive';

    }else {
          this.state = 'active';

    }

  }

  activar() {

    this.state = 'active';


  }

  desactivar() {

  }

  subir() {
    this.state = 'sube';

  }

  bajar() {
    this.state = 'baja';

  }

  rotar() {
    this.state = 'rotar';

  }

  amplia() {
    this.state = 'ampliar';

  }

  reduce() {
    this.state = 'reducir';

  }

  cambiarTamano() {
    if(this.state == 'reducir'){
      this.state = 'ampliar';

    }else {
      this.state = 'reducir';

    }
  }

  cambiarActivo() {
    this.state = 'active';

  }

  cambiarInactivo() {
    this.state = 'inactive';

  }

}
