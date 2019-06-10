import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { Enrollment } from '../../interfaces/enrollment';
import { Router } from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-my-class-groups',
  templateUrl: './my-class-groups.page.html',
  styleUrls: ['./my-class-groups.page.scss'],
})
export class MyClassGroupsPage implements OnInit {

  private enrollments: Array<Enrollment>;
  private activeEnrollments: Array<Enrollment>;
  private inactiveEnrollments: Array<Enrollment>;
  private pendingEnrollments: Array<Enrollment>;
  private collaboratorId: Number;

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
    // this.collaboratorId = this.route.snapshot.paramMap.get('collaboratorId')
    this.collaboratorId = 4;
    this.getEnrollments(this.collaboratorId);
  }

  getEnrollments(collaboratorId: Number): Array<Enrollment> {
    this.api.getEnrollments(collaboratorId).subscribe((data: Array<Enrollment>) => {
      this.enrollments = data;
      this.getActiveEnrollments(this.enrollments);
      this.getInactiveEnrollments(this.enrollments);
      this.getPendingEnrollments(this.enrollments);
    });
    return this.enrollments;
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
