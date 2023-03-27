import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.css']
})
export class FormularioArrayComponent implements OnInit {

  miFormularioArray: FormGroup = new FormGroup({});

  constructor(private _formbuilder: FormBuilder) {}

  ngOnInit(): void {

     this.miFormularioArray = this._formbuilder.group({
      nombre: '',
      apellidos: '',
      telefonos: this._formbuilder.array([])
     })




  }

  get telefonosFormulario(): FormArray{

      return this.miFormularioArray.get('telefonos') as FormArray

  }

  // Metodo para anadir Telefono a la lista
  anadirTelefono(){
    const telefonoNuevo = this._formbuilder.group({
      prefijo: '',
      numero: ''
    });

  // Anadimos al grupo la lista de telefonos
  this.telefonosFormulario.push(telefonoNuevo);

  }

  // Metodo de eliminar telefonos
  eliminarTelefono(index: number){
    this.telefonosFormulario.removeAt(index);

  }




}
