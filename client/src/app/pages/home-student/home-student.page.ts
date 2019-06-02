import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { APIService } from '../../services/api.service';
import * as _ from 'lodash';
import { Enrollment } from '../../interfaces/enrollment';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.page.html',
  styleUrls: ['./home-student.page.scss'],
})
export class HomeStudentPage implements OnInit {

  public enrollments: Array<Enrollment>;
  public activeEnrollments: Array<Enrollment>;
  public inactiveEnrollments: Array<Enrollment>;
  public pendingEnrollments: Array<Enrollment>;

  constructor(private router: Router, private api: APIService) { }

  goToClassGroupDetails(enrollment: Enrollment) {
    console.log(enrollment);
    const classGroupId = enrollment.class_group.id;
    this.router.navigate(['my-class-group', classGroupId]);
  }
  newEnrollment() {
    this.router.navigate(['enroll-in-course']);
  }

  ngOnInit() {
    // const id = this.route.snapshot.params.id;
    const id = 4;
    this.getEnrollments(id);
  }

  getEnrollments(id) {
    this.api.getEnrollments(id).subscribe((data: Array<Enrollment>) => {
      this.enrollments = data;
      console.log(this.enrollments);
      this.getActiveEnrollments(this.enrollments);
      this.getInactiveEnrollments(this.enrollments);
      this.getPendingEnrollments(this.enrollments);
    });
  }

  getActiveEnrollments(enrollments: Array<Enrollment>) {
    //this.activeEnrollments = _.filter(enrollments , (o) => {
//return o.active && o.status === "ACCEPTED" && !o.graduated;
    //});
  }

  getInactiveEnrollments(enrollments: Array<Enrollment>) {
    //this.inactiveEnrollments = _.filter(enrollments , (o) => {
     // return !o.active && o.status === "ACCEPTED" && o.graduated;
   // });
  }

  getPendingEnrollments(enrollments: Array<Enrollment>) {
   //this.pendingEnrollments = _.filter(enrollments , (o) =>  {
      //return o.status === "PENDING" && o.active;
   // });
  }
//teste
}
