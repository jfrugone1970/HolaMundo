import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { IUsuario } from 'src/app/models/users.interface';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, OnDestroy {

  public lista_usuarios: IUsuario[] = [];
  public title: string = "Lista de Usuarios";
  public subscription: Subscription | undefined;
  public pagina: any;
  public id_usuario: any;

  constructor(private _userservice: UsersService) {

    this.pagina = 0;
    this.id_usuario = 0;

  }

  ngOnInit(): void {

    this.title = "Lista de Usuarios";


  }

  ngOnDestroy(): void {

    this.subscription?.unsubscribe;


  }

  getUnicoUsuario(id: any) {

    this.subscription = this._userservice.getUser(id).subscribe(
      (response) => {

         if(response.data) this.lista_usuarios = response.data;

         console.log("Response ===> ",response.data);

      },
      (error) => console.error(`Ha habido un error al consultar datos ${error}`),
      () => console.info('Se ha completado la llamada a usuario')
      )


  }



  ObtenerUsuario(id: any) {

    /*
    this._authservice.login('eve.holt@reqres.in', 'cityslicka').subscribe(
      (response) => {
         console.log("Respuesta login ", response);
         if(response.token) sessionStorage.setItem('token', response.token);

      },
      (error) => console.log(`Ha habido un error en el proceso de login ${error}`),
      () => console.info('Se ha completado la llamada a login REQRES')
      )
      */



    this.subscription = this._userservice.ObtenerUsuarios(id).subscribe(

      (response) => {

        if(response.page) this.lista_usuarios = response.data;

        console.log("Datos ===> "+response.data);

      },
      (error) => console.log(`Ha habido un error en el proceso de consulta de usuarios ${error}`),
      () => console.info('Se ha completado la llamada de Usuarios')
    )



  }

}
