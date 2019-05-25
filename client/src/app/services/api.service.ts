import { Injectable } from '@angular/core';
import * as Constants from '../../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {


  API_URL = Constants.API_URL;

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

  getStudentsFromClassGroup(collaboratorID: String, classGroupId: String) {
    return this.httpClient.get(`${this.API_URL}/attendance/` + collaboratorID + '/' + classGroupId);
  }

  getClassGroupAttendance(collaboratorID: String) {
    return this.httpClient.get(`${this.API_URL}/attendance/` + collaboratorID);
  }
  getClassGroupsFromCourse(classGroupId: String) {
    return this.httpClient.get(`${this.API_URL}/class-groups/` + classGroupId);
  }

  getOpenClassGroups(studentID: String) {
    return this.httpClient.get(`${this.API_URL}/enrollments/` + studentID);
  }

  getAllCoursesFromStudent(studentID: String) {
    return this.httpClient.get(`${this.API_URL}/students/` + studentID + '/class-groups');
  }

  getClassGroupDetails(classGroupId: String) {
    return this.httpClient.get(`${this.API_URL}/class-groups/` + classGroupId);
  }

  getAbsences(studentID: String) {
    return this.httpClient.get(`${this.API_URL}/absences/` + studentID);
  }

  getTransferClassGroups(studentID: String, courseID: String) {
    return this.httpClient.get(`${this.API_URL}/students/` + studentID + '/courses/' + courseID + '/turmas');
  }
}
