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

  public hacerLogout() {
    this.usuario = null;
    sessionStorage.removeItem('usuarioLogeado');
  }

  public guardarUsuario(data: any): void {
    if (data == null)
      this.usuario = null;
    else {
      this.usuario = new User();
      let dataUser;
      if (data.alumno === undefined) {
        this.usuario.rol = "Profesor";
        dataUser = data.profesor
      } else {
        this.usuario.rol = "Alumno";
        dataUser = data.alumno;
      }
      this.usuario.nombre = dataUser.nombre;
      this.usuario.apellidoPaterno = dataUser.apellidoPaterno;
      this.usuario.apellidoMaterno = dataUser.apellidoMaterno;
      this.usuario.email = dataUser.email;
      this.usuario.matricula = dataUser.matricula;
      this.usuario.password = dataUser.password;
      this.usuario.activo = dataUser.activo;

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
