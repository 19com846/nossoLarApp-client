import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../services/api.service';
import { ClassGroup } from '../../interfaces/class-group';
import { Course } from '../../interfaces/course';
import * as _ from 'lodash';

@Component({
  selector: 'app-class-group-attendance',
  templateUrl: './class-group-attendance.page.html',
  styleUrls: ['./class-group-attendance.page.scss'],
})
export class ClassGroupAttendancePage implements OnInit {
  
  public classGroup: Array<ClassGroup>;
  public course: Array<Course>;

  constructor( private router: Router, private api: APIService) {}

  
  clickCard(classId, courseId){
      this.router.navigate(['attendance',classId,courseId]);
    }

  ngOnInit() {
    this.getAllCourses();
    this.getAllClassGroup();
  }

  getAllCourses() {
    this.api.getAllCourses().subscribe((data: Array<Course>)=> {
      this.course = data;
      console.log(this.course)
    });  
  }

  getAllClassGroup(){
      this.api.getAllClassGroups().subscribe((dataClass: Array<ClassGroup>) => {
        this.classGroup = dataClass;
        console.log(this.classGroup);
      })
  }
}
