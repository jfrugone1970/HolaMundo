import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";


import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { ContactDetailsPageComponent } from './components/contact-details-page/contact-details-page.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Seccion de Modulos de Angular Material
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';

// Locales Para Pipe
import { registerLocaleData } from '@angular/common';
import LocaleES from '@angular/common/locales/es';
registerLocaleData(LocaleES); // Registrando el LOCALE_ID

import { MatNativeDateModule } from '@angular/material/core';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { TantoPorCientoPipe } from './pipes/tanto-por-ciento.pipe';
import { MediaPipe } from './pipes/media.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';
import { FactorialPipe } from './pipes/factorial.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    ContactDetailsPageComponent,
    UsuariosComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    TantoPorCientoPipe,
    MediaPipe,
    CalcularPuntuacionPipe,
    FactorialPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListsModule,
    // Importamos reactive form module para trabajar con formularios reactivos
    ReactiveFormsModule,
    // Importamo FormField de Angular Material
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatChipsModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule
  ],
  providers: [
    // Registrar el LocaleS para Pipe
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
