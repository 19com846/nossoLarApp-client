import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { StaticAPIService } from '../../services/static-api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.page.html',
  styleUrls: ['./home-student.page.scss'],
})
export class HomeStudentPage implements OnInit {

  public turmas: any;
  public activeTurmas: any;
  public inactiveTurmas: any;

  constructor(private router: Router, private api: StaticAPIService) { }

  goToTurmaDetail() {
    this.router.navigate(['my-class-group']);
  }
  newEnrollment() {
    this.router.navigate(['enroll-in-course']);
  }

  ngOnInit() {
    // const id = this.route.snapshot.params.id;
    const id = '1';
    this.getTurmas(id);
  }

  getTurmas(id: String) {
    this.api.getAllCoursesFromStudent(id).subscribe((data: Array<object>) => {
      this.turmas = data;
      this.getActiveCourses(this.turmas);
      this.getInactiveCourses(this.turmas);
    });
  }

  getActiveCourses(turmas: any) {
    this.activeTurmas = _.filter(turmas , function(o) {
      return o.active;
    });
  }

  getInactiveCourses(turmas: any) {
    this.inactiveTurmas = _.filter(turmas , function(o) {
      return !o.active;
    });
  }

}
