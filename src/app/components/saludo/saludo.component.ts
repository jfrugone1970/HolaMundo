import { Component, OnInit, Input, OnDestroy, OnChanges, Output, EventEmitter } from '@angular/core';
import { TaskListsComponent } from 'src/app/modules/lists/task-lists/task-lists.component';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() public nombre: string;
  @Output() mensajejeEmitter: EventEmitter<string> = new EventEmitter<string>();




  constructor() {

    this.nombre = "Anonimo";

  }

  ngOnInit(): void {
    // Instrucciones previas a la renderizacion del componente
    console.log("nGOninit del componente Saludo");


  }

  ngOnDestroy(): void {
    console.log("OnDestroy el componente va a desaparecer");

  }

  ngOnChanges(): void {
    console.log("ngOnChanges el componente recibe cambios");

  }
 /*
   Evento para gestionar un evento de tipo click en el DOM
*/
  alertaSaludo(): void{
     this.mensajejeEmitter.emit(`Hola, ${this.nombre}. Alerta despachada desde un click de un boton`);

  }

}
