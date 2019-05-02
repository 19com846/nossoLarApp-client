import { Injectable } from '@angular/core';
import * as Constants from '../../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaticAPIService {
  getOpenTurmasOfCourse(turmaID: number) {
    return this.httpClient.get(`${this.API_URL}/turmas/` + turmaID);
  }
  API_URL = Constants.STATIC_URL;

  getOpenTurmas(studentID: number) {
    return this.httpClient.get(`${this.API_URL}/matriculas/` + studentID);
  }

  constructor(private httpClient: HttpClient) { }

  getAllCoursesFromStudent(studentID: number) {
    return this.httpClient.get(`${this.API_URL}/student/` + studentID);
  }

  getTurmaDetails(turmaID: number) {
    return this.httpClient.get(`${this.API_URL}/turma/` + turmaID);
  }

  getPresencesFromStudentInClass(presenceID: number) {
    return this.httpClient.get(`${this.API_URL}/faltas/` + presenceID);
  }
}
