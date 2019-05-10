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

  constructor(private route: ActivatedRoute, private router: Router, private api: StaticAPIService) { }

  goToTurmaDetail() {
    this.router.navigate(['minha-turma']);
  }
  newEnrollment() {
    this.router.navigate(['cadastrar-novo-curso-student'])
  }
  clickCard(id) {
    this.router.navigate(['minha-turma']);
  }

  clickPlus() {
    this.router.navigate(['enroll-in-course']);
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.getTurmas(id);
  }

  getTurmas(id: String) {
    this.api.getAllCoursesFromStudent(id).subscribe((data: Array<object>) => {
      this.turmas = data;
      // console.log(data);
      this.getActiveCourses(this.turmas);
      this.getInactiveCourses(this.turmas);
    });
  }

  getActiveCourses(turmas: any) {
    this.activeTurmas = _.filter(turmas , function(o) {
      return o.active;
    });
    // console.log(this.activeTurmas);
  }

  getInactiveCourses(turmas: any) {
    this.inactiveTurmas = _.filter(turmas , function(o) {
      return !o.active;
    });
    // console.log(this.activeTurmas);
  }

}
