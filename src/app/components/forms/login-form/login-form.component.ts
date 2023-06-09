import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public title: string;
  constructor(private _authservice: AuthService) {

    this.title = "Lista de Usuario";

  }

  ngOnInit(): void {

    this._authservice.login('eve.holt@reqres.in', 'cityslicka').subscribe(
      (response) => {
         console.log("Respuesta login ", response);
         if(response.token) sessionStorage.setItem('token', response.token);

      },
      (error) => console.log(`Ha habido un error en el proceso de login ${error}`),
      () => console.info('Se ha completado la llamada a login REQRES')
      )



    }








}
