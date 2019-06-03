import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../services/api.service';
import { ClassGroup } from '../../interfaces/class-group';
import { Course } from '../../interfaces/course';
import * as _ from 'lodash';

@Component({
  selector: 'app-all-class-groups',
  templateUrl: './all-class-groups.page.html',
  styleUrls: ['./all-class-groups.page.scss'],
})
export class AllClassGroupsPage implements OnInit {

  public classGroup: Array<ClassGroup>;
  public course: Array<Course>;

  constructor( private router: Router, private api: APIService) {}

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
  rollCall() {

  }

  newClassGroup(){
    this.router.navigate(['create-class']);
  }
}
