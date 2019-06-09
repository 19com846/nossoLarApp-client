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

  private enrollments: Array<Enrollment>;
  private activeEnrollments: Array<Enrollment>;
  private inactiveEnrollments: Array<Enrollment>;
  private pendingEnrollments: Array<Enrollment>;
  private studentId: Number;

  constructor(private router: Router, private api: APIService) { }

  goToClassGroupDetails(enrollment: Enrollment) {
    const classGroupId = enrollment.class_group.id;
    this.router.navigate(['my-class-group', classGroupId]);
  }
  newEnrollment() {
    this.router.navigate(['enroll-in-class-group']);
  }

  ngOnInit() {
    //Get from paramMap
    this.studentId = 4;
    this.getEnrollments(this.studentId);
  }

  getEnrollments(studentId: Number) {
    this.api.getEnrollments(studentId).subscribe((data: Array<Enrollment>) => {
      this.enrollments = data;
      this.getActiveEnrollments(this.enrollments);
      this.getInactiveEnrollments(this.enrollments);
      this.getPendingEnrollments(this.enrollments);
    });
  }

  getActiveEnrollments(enrollments: Array<Enrollment>): Array<Enrollment> {
    this.activeEnrollments = _.filter(enrollments , (o) => {
        return o.active && o.status === "ACCEPTED" && !o.graduated;
    });
    return this.activeEnrollments;
  }

  getInactiveEnrollments(enrollments: Array<Enrollment>): Array<Enrollment> {
    this.inactiveEnrollments = _.filter(enrollments , (o) => {
      return !o.active && o.status === "ACCEPTED" && o.graduated;
    });
    return this.inactiveEnrollments;
  }

  getPendingEnrollments(enrollments: Array<Enrollment>): Array<Enrollment> {
   this.pendingEnrollments = _.filter(enrollments , (o) =>  {
      return o.status === "PENDING" && o.active;
   });
   return this.pendingEnrollments;
  }
}
