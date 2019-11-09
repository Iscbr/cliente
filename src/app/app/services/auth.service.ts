import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../classes/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario: User;
  constructor(private http: HttpClient) { }

  public hacerLogin(usuario: User) : Observable<any> {
    return this.http.get<any>("http://localhost:8080/auth/authUser/"
      + usuario.matricula + "/" + usuario.password);
  }

  public guardarUsuario(data: any): void {
    if (data == null)
      this.usuario = null;
    else {
      this.usuario = new User();
      this.usuario.nombre = data.usuario.nombre;
      this.usuario.apellidoPaterno = data.usuario.apellidoPaterno;
      this.usuario.apellidoMaterno = data.usuario.apellidoMaterno;
      this.usuario.email = data.usuario.email;
      this.usuario.matricula = data.usuario.matricula;
      this.usuario.password = data.usuario.password;

      sessionStorage.setItem('usuarioLogeado', JSON.stringify(this.usuario));

      console.log("Usuario guardado en la sesión: " + JSON.stringify(this.usuario));
    }
  }

  public usuarioAutenticado(): boolean {
    let sessionUser = sessionStorage.getItem('usuarioLogeado');
    if (this.usuario == null && sessionUser == null) return false;
    return true;
  }
 }
