import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../services/curso.service';
import {User} from '../../../classes/user';
import Swal from "sweetalert2";
import {Router} from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  private datosCursos: any;
  private usuarioLogeado: User;
  constructor(private cursoService: CursoService, private route: Router) {
    this.usuarioLogeado = new User();
  }

  ngOnInit() {
    this.usuarioLogeado = JSON.parse(sessionStorage.getItem('usuarioLogeado'));

    if (this.usuarioLogeado == null) this.route.navigate(["/login"]);
    this.cursoService.obtenerTodosCursos().subscribe(
      data => {
        console.log(data.Cursos);
        this.datosCursos = data.Cursos
      },
      error => console.log("Ocurrió un error al obtener los datos: " + error));
  }

  public inscribirse(nrc) {
    this.cursoService.inscribirse(nrc, this.usuarioLogeado.matricula).subscribe(
      data => {
        Swal.fire({
          position: 'top',
          type: 'success',
          title: 'Se ha realizado la inscripción correctamente.',
          showConfirmButton: true
        });
        this.route.navigate(["/home"]);
    }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops... Algo fue mal',
          text: 'No fue posible realizar la inscripción, inténtalo más tarde'
        })
    });

  }

}
