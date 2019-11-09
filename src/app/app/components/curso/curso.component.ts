import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  private datosCursos: any;
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.datosCursos = JSON.parse("{\n" +
      "    \"Éxito\": \"Cursos encontrados\",\n" +
      "    \"Cursos\": [\n" +
      "        {\n" +
      "            \"nrc\": 2,\n" +
      "            \"nombre\": \"Programación I\",\n" +
      "            \"periodo\": \"Otoño 2019\",\n" +
      "            \"descripcion\": \"Materia de programación\",\n" +
      "            \"activo\": true,\n" +
      "            \"profesor\": {\n" +
      "                \"matricula\": 3,\n" +
      "                \"nombre\": \"Rubín\",\n" +
      "                \"apellidoPaterno\": \"Linares\",\n" +
      "                \"apellidoMaterno\": \"Linares\",\n" +
      "                \"email\": \"carlos@gmail.com\",\n" +
      "                \"password\": \"345235234\",\n" +
      "                \"activo\": true\n" +
      "            },\n" +
      "            \"calificacion\": []\n" +
      "        },\n" +
      "        {\n" +
      "            \"nrc\": 1,\n" +
      "            \"nombre\": \"Matemáticas elementales\",\n" +
      "            \"periodo\": \"Otoño 2019\",\n" +
      "            \"descripcion\": \"Primera materia de matemáticas\",\n" +
      "            \"activo\": true,\n" +
      "            \"profesor\": {\n" +
      "                \"matricula\": 5,\n" +
      "                \"nombre\": \"Gerardo\",\n" +
      "                \"apellidoPaterno\": \"Martínez\",\n" +
      "                \"apellidoMaterno\": \"Guzmán\",\n" +
      "                \"email\": \"gerardo@gmail.com\",\n" +
      "                \"password\": \"343454222\",\n" +
      "                \"activo\": true\n" +
      "            },\n" +
      "            \"calificacion\": [\n" +
      "                {\n" +
      "                    \"id\": 3,\n" +
      "                    \"examen\": 0.0,\n" +
      "                    \"total\": 0.0,\n" +
      "                    \"activo\": true\n" +
      "                }\n" +
      "            ]\n" +
      "        },\n" +
      "        {\n" +
      "            \"nrc\": 3,\n" +
      "            \"nombre\": \"Programación II\",\n" +
      "            \"periodo\": \"Otoño 2019\",\n" +
      "            \"descripcion\": \"Materia de programación\",\n" +
      "            \"activo\": true,\n" +
      "            \"profesor\": {\n" +
      "                \"matricula\": 4,\n" +
      "                \"nombre\": \"Meliza\",\n" +
      "                \"apellidoPaterno\": \"Contreras\",\n" +
      "                \"apellidoMaterno\": \"Contreras\",\n" +
      "                \"email\": \"meliza@gmail.com\",\n" +
      "                \"password\": \"345235234\",\n" +
      "                \"activo\": true\n" +
      "            },\n" +
      "            \"calificacion\": [\n" +
      "                {\n" +
      "                    \"id\": 1,\n" +
      "                    \"examen\": 0.0,\n" +
      "                    \"total\": 0.0,\n" +
      "                    \"activo\": true\n" +
      "                }\n" +
      "            ]\n" +
      "        },\n" +
      "        {\n" +
      "            \"nrc\": 6,\n" +
      "            \"nombre\": \"Aplicaciones web\",\n" +
      "            \"periodo\": \"Otoño 2019\",\n" +
      "            \"descripcion\": \"Materia de programación\",\n" +
      "            \"activo\": true,\n" +
      "            \"profesor\": {\n" +
      "                \"matricula\": 2,\n" +
      "                \"nombre\": \"Carlos Armando\",\n" +
      "                \"apellidoPaterno\": \"Ríos\",\n" +
      "                \"apellidoMaterno\": \"Ríos\",\n" +
      "                \"email\": \"carlos@gmail.com\",\n" +
      "                \"password\": \"345235234\",\n" +
      "                \"activo\": true\n" +
      "            },\n" +
      "            \"calificacion\": []\n" +
      "        },\n" +
      "        {\n" +
      "            \"nrc\": 5,\n" +
      "            \"nombre\": \"Aplicaciones móviles\",\n" +
      "            \"periodo\": \"Otoño 2019\",\n" +
      "            \"descripcion\": \"Materia de programación\",\n" +
      "            \"activo\": true,\n" +
      "            \"profesor\": {\n" +
      "                \"matricula\": 2,\n" +
      "                \"nombre\": \"Carlos Armando\",\n" +
      "                \"apellidoPaterno\": \"Ríos\",\n" +
      "                \"apellidoMaterno\": \"Ríos\",\n" +
      "                \"email\": \"carlos@gmail.com\",\n" +
      "                \"password\": \"345235234\",\n" +
      "                \"activo\": true\n" +
      "            },\n" +
      "            \"calificacion\": [\n" +
      "                {\n" +
      "                    \"id\": 4,\n" +
      "                    \"examen\": 0.0,\n" +
      "                    \"total\": 0.0,\n" +
      "                    \"activo\": true\n" +
      "                },\n" +
      "                {\n" +
      "                    \"id\": 2,\n" +
      "                    \"examen\": 0.0,\n" +
      "                    \"total\": 0.0,\n" +
      "                    \"activo\": true\n" +
      "                }\n" +
      "            ]\n" +
      "        },\n" +
      "        {\n" +
      "            \"nrc\": 4,\n" +
      "            \"nombre\": \"Redes inalámbricas\",\n" +
      "            \"periodo\": \"Otoño 2019\",\n" +
      "            \"descripcion\": \"Materia de programación\",\n" +
      "            \"activo\": true,\n" +
      "            \"profesor\": {\n" +
      "                \"matricula\": 1,\n" +
      "                \"nombre\": \"Guillermo\",\n" +
      "                \"apellidoPaterno\": \"Jímenez\",\n" +
      "                \"apellidoMaterno\": \"De los Santos\",\n" +
      "                \"email\": \"guillermo@gmail.com\",\n" +
      "                \"password\": \"22222222\",\n" +
      "                \"activo\": true\n" +
      "            },\n" +
      "            \"calificacion\": []\n" +
      "        }\n" +
      "    ]\n" +
      "}")
    this.cursoService.obtenerTodosCursos().subscribe(
      data => {
        //this.datosCursos = data
      },
      error => console.log("Ocurrió un error al obtener los datos: " + error));
  }

}
