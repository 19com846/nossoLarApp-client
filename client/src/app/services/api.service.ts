import { Injectable } from '@angular/core';
import * as Constants from '../../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  
  API_URL = Constants.API_URL;

  constructor(private httpClient: HttpClient) { }

  getAllCourses() {
    return this.httpClient.get(`${this.API_URL}/courses/`)
  }

  getAllAdministrators() {
    return this.httpClient.get(`${this.API_URL}/administrators/`);
  }

  getAllCollaborators() {
    return this.httpClient.get(`${this.API_URL}/collaborators/`);
  }

  getAllStudents() {
    return this.httpClient.get(`${this.API_URL}/students/`);
  }

  getStudentsFromClassGroup(collaboratorId: Number, classGroupId: Number) {
    return this.httpClient.get(`${this.API_URL}/attendance/` + collaboratorId + '/' + classGroupId);
  }

  getClassGroupAttendance(collaboratorId: Number) {
    return this.httpClient.get(`${this.API_URL}/attendance/` + collaboratorId);
  }
  getClassGroupsFromCourse(classGroupId: Number) {
    return this.httpClient.get(`${this.API_URL}/class-groups/` + classGroupId);
  }

  getAllClassGroups() {
    return this.httpClient.get(`${this.API_URL}/class-groups/`)
  }

  getOpenClassGroups(studentId: Number) {
    return this.httpClient.get(`${this.API_URL}/enrollments/` + studentId);
  }

  getEnrollments(studentId: Number) {
    return this.httpClient.get(`${this.API_URL}/students/` + studentId + '/enrollments/');
    // return this.httpClient.get(`${this.API_URL}/students/` + studentId + '/class-groups', {
    //   headers: new HttpHeaders()
    //             .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkI…9tIn0.vrafKM-NPyvVkGv0d9PRE4bE9MlUV1xfkQMEfY5wai4')
    // });
  }

  getClassGroupDetails(classGroupId: Number) {
    return this.httpClient.get(`${this.API_URL}/class-groups/` + classGroupId);
  }

  getAbsences(studentId: Number, classGroupId: Number) {
    return this.httpClient.get(`${this.API_URL}/students/` + studentId + '/class-groups/' + classGroupId + '/attendances');
  }

  getTransferClassGroups(studentId: Number, classGroupId: Number) {
    return this.httpClient.get(`${this.API_URL}/students/` + studentId + '/class-groups/' + classGroupId + '/transfer-targets');
  }
}
