import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.page.html',
  styleUrls: ['./all-students.page.scss'],
})
export class AllStudentsPage implements OnInit {

  students: any;

  constructor(private api: APIService) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.api.getAllStudents().subscribe((data: Array<object>) => {
      this.students = data;
    });
  }

}
