import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login(email: string, password: string): Observable<any>{

    const body = {
      email: email,
      password: password
    }

    return this._http.post('https://reqres.in/api/login', body);


  }
}
