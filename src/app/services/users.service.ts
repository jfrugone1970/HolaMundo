import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private _http: HttpClient) {


   }

  getUser(id: any): Observable<any>{


    return this._http.get('https://reqres.in/api/users?id=', id);


  }

  ObtenerUsuarios(page: any): Observable<any>{


    return this._http.get('https://reqres.in/api/users?page=', page);

  }
}
