import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../../classes/user';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  usuarioLogeado: User;
  constructor(private authService : AuthService, private route: Router) {
  }

  ngOnInit() {
    this.usuarioLogeado = JSON.parse(sessionStorage.getItem('usuarioLogeado'));
    if (this.usuarioLogeado == null) this.route.navigate(["/login"]);
  }

  logout() {
    this.authService.hacerLogout();
    Swal.fire({
      type: 'success',
      title: 'Hasta luego...',
      showConfirmButton: true
    });
    this.route.navigate(["/login"]);
  }

}
