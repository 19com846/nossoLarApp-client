import { Injectable } from '@angular/core';
import * as Constants from '../../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaticAPIService {

  API_URL = Constants.STATIC_URL;

  constructor(private httpClient: HttpClient) { }

  getStudentsfromTurma(collaboratorID: String, turmaID: String) {
    return this.httpClient.get(`${this.API_URL}/chamada/` + collaboratorID + '/' + turmaID)
  }

  getTurmasToAssessPresence(collaboratorID: String) {
    return this.httpClient.get(`${this.API_URL}/chamada/` + collaboratorID);
  }
  getOpenTurmasOfCourse(turmaID: String) {
    return this.httpClient.get(`${this.API_URL}/turmas/` + turmaID);
  }

  getOpenTurmas(studentID: String) {
    return this.httpClient.get(`${this.API_URL}/matriculas/` + studentID);
  }

  getAllCoursesFromStudent(studentID: String) {
    return this.httpClient.get(`${this.API_URL}/student/` + studentID);
  }

  getTurmaDetails(turmaID: String) {
    return this.httpClient.get(`${this.API_URL}/turma/` + turmaID);
  }

  getPresencesFromStudentInClass(presenceID: String) {
    return this.httpClient.get(`${this.API_URL}/faltas/` + presenceID);
  }
}
