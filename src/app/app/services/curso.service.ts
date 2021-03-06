import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CursoService {

  constructor(private httpClient: HttpClient) {}

  public obtenerCursos(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/alumno/obtenerTodos',
      {headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })});
  }

  public obtenerTodosCursos(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/curso/obtenerTodos');
  }

  public inscribirse(nrc, matricula): Observable<any> {
    return this.httpClient.put<any>('http://localhost:8080/curso/inscribir/' + nrc.toString() + '/' + matricula.toString(), null);
  }

  public obtenerCursosInscritos(matricula): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/curso/inscrito/' + matricula.toString());
  }

}
