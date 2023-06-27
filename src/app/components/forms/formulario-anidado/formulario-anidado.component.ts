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

  // Para los titulos y subtitulos del formulario

  public title: string;
  public subtitle: string;

  constructor(private _formbuilder: FormBuilder) {

    this.title = 'Reactive Form';
    this.subtitle = 'Angular Material - Nested Form';

  }

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
