import { Component, OnInit } from '@angular/core';

// Ejemplo Basico de formulario Reactivo
import { FormBuilder, FormGroup } from '@angular/forms';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // Para datos de tipo fecha
  miFecha: any = Date.now();

  // Para los titulos y subtitulos de los formularios
  title: string = 'Reactive Form';
  subtitle: string = 'Angular Material - Reactive Form';


  // Definiendo nuestro formulario
  miFormulario: FormGroup = new FormGroup({});


  // Inyectamos la clase FormBuilder
  constructor(private _formbuilder: FormBuilder) {}

  ngOnInit(): void {

    // Iniciamos los campos del formulario y sus valores
    this.miFormulario = this._formbuilder.group(
      {
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        direccion: '',
        fecha: this.miFecha
      }
    );

    //Nos suscribimos a los cambios que ocurren en el formulario
    this.miFormulario.valueChanges.subscribe((valor: any) => {
      console.log(valor)

    }

    )

    // Abertura de Dialogo


  }


}
