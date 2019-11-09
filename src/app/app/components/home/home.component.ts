import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../services/curso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status = true;
  nombreAlumno = 'Israel';
  porcentajeAlumno = 60;
  cursos = [{
    nombre : 'Programación 2',
    status : 'En progreso'
  },
    {
      nombre : 'Minería de datos',
      status : 'En progreso'
    },
    {
      nombre : 'Programción distribuida',
      status : 'En progreso'
    },
    {
      nombre : 'Aplicaciones Web',
      status : 'En progreso'
    }];
  constructor(private cursoService: CursoService) {}

  ngOnInit() {
    this.cursoService.obtenerCursos().subscribe(alumnosFromServer => {
        console.log(alumnosFromServer);
        JSON.parse(alumnosFromServer);
    },
      error => console.log('Ocurrio un error al obtener los datos del servidor: ' + error)
    );
  }

}
