import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Student } from './student';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.page.html',
  styleUrls: ['./all-students.page.scss'],
})
export class AllStudentsPage implements OnInit {

  students: Array<Student>;

  constructor(private api: APIService) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.api.getAllStudents().subscribe((data: Array<Student>) => {
      this.students = data;
    });
  }

}
