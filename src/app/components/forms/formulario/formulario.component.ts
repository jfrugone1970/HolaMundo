import { Component, OnInit } from '@angular/core';

// Ejemplo Basico de formulario Reactivo
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

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
        direccion: ''
      }
    );

    //Nos suscribimos a los cambios que ocurren en el formulario
    this.miFormulario.valueChanges.subscribe((valor: any) => {
      console.log(valor)

    }

    )

  }



}
