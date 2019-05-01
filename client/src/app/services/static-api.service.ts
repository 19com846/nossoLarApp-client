import { Injectable } from '@angular/core';
import * as Constants from '../../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaticAPIService {

  API_URL = Constants.STATIC_URL;

  constructor(private httpClient: HttpClient) { }

  getAllCoursesFromStudent(studentID: number) {
        return this.httpClient.get(`${this.API_URL}/student/` + studentID);
  }

  getTurmaDetails(turmaID: number) {
        return this.httpClient.get(`${this.API_URL}/turma/` + turmaID);
  }
}
