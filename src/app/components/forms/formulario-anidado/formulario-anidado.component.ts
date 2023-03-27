import { Component, OnInit } from '@angular/core';

// Importar de Reacti Form para crear un formulario Anidado
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.css']
})
export class FormularioAnidadoComponent implements OnInit {

  // Creamos un formulario

  miFormularioAnidado: FormGroup = new FormGroup({});

  constructor(private _formbuilder: FormBuilder) {}

  ngOnInit(): void {

    // Agrupacion para telefono

    const telefonoFijo = this._formbuilder.group({
      pais: '',
      prefijo: '',
      numero: ''
    })

    const telefonoMovil = this._formbuilder.group({
      pais: '',
      prefijo: '',
      numero: ''
    })

    // Agrupacion del Formulario
    this.miFormularioAnidado = this._formbuilder.group({
      nombre: '',
      fijo: telefonoFijo,
      movil: telefonoMovil

    })


  }

}
