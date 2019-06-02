import { Headers, Http, RequestOptions  } from '@angular/http';

import { Injectable } from '@angular/core';
import * as Constants from '../../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resolve } from 'url';

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

  getStudent(id) {
    return this.httpClient.get(`${this.API_URL}/students/`+id);
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

  postClassGroup(body, requestOptions) {
    this.httpClient.post(`${this.API_URL}/class-groups/`, body, requestOptions)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  postClassGroupLesson(id,body, requestOptions) {
    this.httpClient.post(`${this.API_URL}/class-groups/`+id+'/lessons/', body, requestOptions)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  patchTransferRequest(id,body,requestOptions) {
    this.httpClient.patch(`${this.API_URL}/transfer-requests/`+id+`/confirm/`,body,requestOptions)
    .subscribe(data => {
      console.log(data);
     }, error => {
      console.log(error);
    });
  }
  
  getClassGroupDetails(classGroupId: Number) {
    return this.httpClient.get(`${this.API_URL}/class-groups/` + classGroupId);
  }

  getAbsences(studentId: Number, classGroupId: Number) {
    return this.httpClient.get(`${this.API_URL}/students/` + studentId + '/class-groups/' + classGroupId + '/attendances');
  }

  getTransferRequest() {
    return this.httpClient.get(`${this.API_URL}/transfer-requests/`);
  }
  getTransferClassGroups(studentId: Number, classGroupId: Number) {
    return this.httpClient.get(`${this.API_URL}/students/` + studentId + '/class-groups/' + classGroupId + '/transfer-targets');
  }
}
