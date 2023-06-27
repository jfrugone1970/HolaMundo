import { Component, OnInit } from '@angular/core';

// Ejemplo Basico de formulario Reactivo
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // Para datos de tipo fecha
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  miFecha: any = Date.now();

  // Para los titulos y subtitulos de los formularios
  public title: string;
  public subtitle: string;


  // Definiendo nuestro formulario
  miFormulario: FormGroup = new FormGroup({});


  // Inyectamos la clase FormBuilder
  constructor(private _formbuilder: FormBuilder) {

    this.title = 'Reactive Form';
    this.subtitle = 'Angular Material - Reactive Form';
  }

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.miFormulario.valueChanges.subscribe((valor: any) => {
      console.log(valor)

    }

    )

    // Abertura de Dialogo


  }


}
