import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { IContacto } from 'src/app/models/contacto.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  public listaContactos: IContacto[] = [];
  public contactoseleccionado: IContacto | undefined;
  public title: string = "Lista de contactos";
  public subcription: Subscription | undefined;


  // Inyectamos el Servicio Contacto

  constructor(private _contactoservice: ContactoService) {



  }

  ngOnInit(): void {

    this._contactoservice.obtenerContactos()
        .then((lista: IContacto[]) => this.listaContactos = lista)
        .catch((error: any) => console.log(`Ha habido un error al recuperar la lista de contados ${error}`))
        .finally(() => console.log('Lista de contactos'));



  }

  ngOnDestroy(): void {

    this.subcription?.unsubscribe();


  }

  obtenerContacto(id: number) {

    this.subcription = this._contactoservice.obtenerContactosporId(id)
        ?.subscribe((contacto: IContacto) => this.contactoseleccionado = contacto);

        console.log(this.contactoseleccionado);



  }

}
