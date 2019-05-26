import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { ClassGroup } from 'src/app/interfaces/class-group';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-my-class-groups',
  templateUrl: './my-class-groups.page.html',
  styleUrls: ['./my-class-groups.page.scss'],
})
export class MyClassGroupsPage implements OnInit {

  private classGroups: Array<ClassGroup>;
  private studentId: Number;
  private activeClassGroups: Array<ClassGroup>;
  private inactiveClassGroups: Array<ClassGroup>;

  constructor(private api: APIService,
              private router: Router,
              private route: ActivatedRoute) { }


  goToClassGroupDetails() {
    this.router.navigate(['my-class-group']);
  }
  newEnrollment() {
    this.router.navigate(['enroll-in-course']);
  }

  ngOnInit() {
    // const id = Number(this.route.snapshot.paramMap.get('studentId'));
    this.studentId  = 4;
    this.getClassGroups(this.studentId);
  }
  getClassGroups(id: Number) {
    // this.api.getAllCoursesFromStudent(4).subscribe((data: Array<object>) => {
    //   this.classGroups = data;
    //   this.getActiveCourses(this.classGroups);
    //   this.getInactiveCourses(this.classGroups);
    //   this.getPendingCourses(this.classGroups);
    // });
  }

  getActiveCourses(classGroups: Array<ClassGroup>) {
    this.activeClassGroups = _.filter(classGroups , function(o) {
      // return o.active;
    });
  }

  getInactiveCourses(classGroups: Array<ClassGroup>) {
    this.inactiveClassGroups = _.filter(classGroups , function(o) {
      // return !o.active;
    });
  }

  getPendingCourses(classGroups: any) {
    // TO DO FILTER
  }

}
