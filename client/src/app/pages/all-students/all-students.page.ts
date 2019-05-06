import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaticAPIService } from 'src/app/services/static-api.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.page.html',
  styleUrls: ['./all-students.page.scss'],
})
export class AllStudentsPage implements OnInit {

  students: any;

  constructor(private api: StaticAPIService) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.api.getAllStudents().subscribe((data: Array<object>) => {
      this.students = data;
    });
  }

}
