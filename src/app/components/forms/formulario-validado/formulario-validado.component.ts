import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.css']
})
export class FormularioValidadoComponent implements OnInit {

  miFormularioValidado: FormGroup = new FormGroup({});
  minimo: number = 18;
  maximo: number = 95;

  constructor(private _formbuilder: FormBuilder) {}

  ngOnInit(): void {
      this.miFormularioValidado = this._formbuilder.group({
        // Campo obligatorio de valores
        nombre: ['', Validators.required], // Campo obligatorio
        apellidos: '',
        // Campo obligatorio y de tipo minimo y maximo
        edad: ['', Validators.compose([Validators.required, Validators.min(this.minimo), Validators.max(this.maximo)])],
        // Campo obligatorio y de Tipo email
        email: ['', Validators.compose([Validators.required, Validators.email])],
        // Campo obligatorio de tipo Password
        password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*')])]
        // Campo booleano
      })


  }


  get nombre(){
    return this.miFormularioValidado.get('nombre');

  }

  get apellidos(){
    return this.miFormularioValidado.get('apellidos');

  }

  get edad(){
    return this.miFormularioValidado.get('edad');

  }

  get email(){
    return this.miFormularioValidado.get('email');

  }

  get password(){
    return this.miFormularioValidado.get('password');

  }


  // Metodo del submit del Formulario
  enviarFormulario(){
    if(this.miFormularioValidado.valid){
      console.table(this.miFormularioValidado.value);
      //resetear los campops del formulario
      this.miFormularioValidado.reset();

    }
  }

}
