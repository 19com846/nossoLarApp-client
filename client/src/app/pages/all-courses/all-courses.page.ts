import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassGroup } from '../../interfaces/class-group';
import { APIService } from 'src/app/services/api.service';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.page.html',
  styleUrls: ['./all-courses.page.scss'],
})
export class AllCoursesPage implements OnInit {

  public courses: Array <Course>;

  constructor(private router: Router, private api: APIService) { }

  goToClassGroups(course: Course){
    this.router.navigate(['class-group-details', course.id]);
  }

  newClassGroup(){
    this.router.navigate(['create-class']);
  }

  getAllCourses() {
    this.api.getAllCourses().subscribe((data: Array<Course>) => {
      this.courses = data;
    });
  }

  ngOnInit() {
    this.getAllCourses();
  }
}
