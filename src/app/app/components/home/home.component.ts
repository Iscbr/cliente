import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../services/curso.service';
import {User} from '../../../classes/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarioLogeado: User;
  cursosInscrito: any;
  porcentajeAlumno: number = 60;

  constructor(private cursoService: CursoService, private route: Router) {}

  ngOnInit() {
    this.usuarioLogeado = JSON.parse(sessionStorage.getItem('usuarioLogeado'));
    if (this.usuarioLogeado == null) this.route.navigate(["/login"]);

    this.cursoService.obtenerCursosInscritos(this.usuarioLogeado.matricula).subscribe(
      data => {
        console.log("Cursos inscritos: ");
        console.log(data);
        this.cursosInscrito = data.cursos;
      },
      error => {
        console.log("Error: " + error);
      })
  }

}
