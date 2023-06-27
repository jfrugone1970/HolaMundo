/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.css']
})
export class FormularioValidadoComponent implements OnInit {

  miFormularioValidado: FormGroup = new FormGroup({});
  public minimo: number;
  public maximo: number;
  public fecha: any;

  // Para titulo y subtitulo del Formulario
  public title: string;
  public subtitle: string;


  constructor(private _formbuilder: FormBuilder) {

    this.minimo = 18;
    this.maximo = 95;
    this.fecha = Date.now;

    // Para titulo y subtitulo del Formulario
    this.title = 'Reactive Form';
    this.subtitle = 'Angular Material - Validator Form';

  }

  ngOnInit(): void {
      // Para fechas

      // Para formulario
      this.miFormularioValidado = this._formbuilder.group({
        // Campo obligatorio de valores
        nombre: ['', Validators.required], // Campo obligatorio
        apellidos: '',
        // Campo obligatorio y de tipo minimo y maximo
        edad: ['', Validators.compose([Validators.required, Validators.min(this.minimo), Validators.max(this.maximo)])],
        // Campo obligatorio y de Tipo email
        email: ['', Validators.compose([Validators.required, Validators.email])],
        // Campo obligatorio de tipo Password
        password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*')])],
        // campo de fecha
        fecha_form: [this.fecha, Validators.required],
        // campo de fecha
        acepta: [false, Validators.requiredTrue]
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

  get fecha_form(){
    return this.miFormularioValidado.get('fecha_form');

  }

  get acepta(){
     return this.miFormularioValidado.get('acepta');

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
