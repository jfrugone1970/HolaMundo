import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mocks';

// Importamos la listado de Contactos

import { IContacto } from '../models/contacto.interface';

// Importamos Observable de 'rxjs'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]> {

    return Promise.resolve(CONTACTOS);



  }

  obtenerContactosporId(id: number): Observable<IContacto> | undefined {

    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id);

    // Creamos un observable

    let observable: Observable<IContacto> = new Observable(observer => {

       observer.next(contacto);
       observer.complete();

    })

    if(contacto) {
       return observable;
    } else {
      return;

    }
  }

}
