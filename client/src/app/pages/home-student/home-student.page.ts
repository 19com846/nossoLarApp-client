import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { APIService } from '../../services/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.page.html',
  styleUrls: ['./home-student.page.scss'],
})
export class HomeStudentPage implements OnInit {

  public classGroups: any;
  public activeClassGroups: any;
  public inactiveClassGroups: any;
  public pendingClassGroups: any;

  constructor(private router: Router, private api: APIService) { }

  goToClassGroupDetails() {
    this.router.navigate(['my-class-group']);
  }
  newEnrollment() {
    this.router.navigate(['enroll-in-course']);
  }

  ngOnInit() {
    // const id = this.route.snapshot.params.id;
    const id = '1';
    this.getClassGroups(id);
  }

  getClassGroups(id: String) {
    this.api.getAllCoursesFromStudent(id).subscribe((data: Array<object>) => {
      this.classGroups = data;
      this.getActiveCourses(this.classGroups);
      this.getInactiveCourses(this.classGroups);
      this.getPendingCourses(this.classGroups);
    });
  }

  getActiveCourses(classGroups: any) {
    this.activeClassGroups = _.filter(classGroups , function(o) {
      return o.active;
    });
  }

  getInactiveCourses(classGroups: any) {
    this.inactiveClassGroups = _.filter(classGroups , function(o) {
      return !o.active;
    });
  }

  getPendingCourses(classGroups: any) {
    // TO DO FILTER
  }

}
