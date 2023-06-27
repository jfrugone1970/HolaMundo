import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private _http: HttpClient) {


   }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUser(id: any): Observable<any>{


    return this._http.get('https://reqres.in/api/users?id=', id);


  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ObtenerUsuarios(page: any): Observable<any>{


    return this._http.get('https://reqres.in/api/users?page=', page);

  }
}
