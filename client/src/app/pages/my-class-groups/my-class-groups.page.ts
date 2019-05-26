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
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    const id = 4;
    this.getClassGroups(id);
  }
  getClassGroups(id: Number) {
<<<<<<< HEAD
    // this.api.getAllCoursesFromStudent(4).subscribe((data: Array<object>) => {
    //   this.classGroups = data;
      // this.getActiveCourses(this.classGroups);
      // this.getInactiveCourses(this.classGroups);
      // this.getPendingCourses(this.classGroups);
    // });
=======
    this.api.getAllCoursesFromStudent(4).subscribe((data: Array<object>) => {
      this.classGroups = data;
      // this.getActiveCourses(this.classGroups);
      // this.getInactiveCourses(this.classGroups);
      // this.getPendingCourses(this.classGroups);
    });
>>>>>>> Prepar Front-end to connect with back-end
  }

  // getActiveCourses(classGroups: ClassGroup) {
  //   this.activeClassGroups = _.filter(classGroups , function(o) {
  //     return o.active;
  //   });
  // }

  // getInactiveCourses(classGroups: ClassGroup) {
  //   this.inactiveClassGroups = _.filter(classGroups , function(o) {
  //     return !o.active;
  //   });
  // }

  getPendingCourses(classGroups: any) {
    // TO DO FILTER
  }

}
