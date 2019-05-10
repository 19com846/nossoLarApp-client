import { Injectable } from '@angular/core';
import * as Constants from '../../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaticAPIService {
  

  API_URL = Constants.STATIC_URL;

  constructor(private httpClient: HttpClient) { }

  getAllAdministrators() {
    return this.httpClient.get(`${this.API_URL}/administrators/`);
  }

  getAllCollaborators() {
    return this.httpClient.get(`${this.API_URL}/collaborators/`);
  }

  getAllStudents() {
    return this.httpClient.get(`${this.API_URL}/students/`);
  }

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
    return this.httpClient.get(`${this.API_URL}/students/` + studentID + '/class-groups');
  }

  getTurmaDetails(turmaID: String) {
    return this.httpClient.get(`${this.API_URL}/class-groups/` + turmaID);
  }

  getAbscences(studentID: String) {
    return this.httpClient.get(`${this.API_URL}/abscences/` + studentID);
  }

  getTransferClassGroups(studentID: String, courseID: String) {
    return this.httpClient.get(`${this.API_URL}/students/` + studentID + '/courses/' + courseID + '/turmas');
  }
}
