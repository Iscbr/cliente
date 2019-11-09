import { Component, OnInit } from '@angular/core';
import {User} from '../../../classes/user';
import Swal from 'sweetalert2';
import {AuthService} from '../../services/auth.service';
import {Route, Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: User;

  constructor(private authService: AuthService,
              private route : Router) {
    this.usuario = new User();
  }

  ngOnInit() {
  }

  public login():void {
    if (this.usuario.matricula == null && this.usuario.password == null) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Debe ingresar una matrícula y una contraseña'
      });
      return;
    }
    console.log("Credenciales ingresadas: " + JSON.stringify(this.usuario));
    this.authService.hacerLogin(this.usuario).subscribe(
      data => {
        console.log("Data contiene: " + JSON.stringify(data));
        this.authService.guardarUsuario(data);
        Swal.fire({
          position: 'top',
          type: 'success',
          title: 'Te has loggeado exitosamente.',
          showConfirmButton: true
        });
        this.route.navigate(["/cursos"]);
      },
      error => {
        console.log("Error contiene: " + JSON.stringify(error));
        Swal.fire({
          type: 'error',
          title: 'Oops... Algo fue mal',
          text: 'Usuario o contraseña invalidos, verifalas e intenta de nuevo.'
        })
      });
  }

}
