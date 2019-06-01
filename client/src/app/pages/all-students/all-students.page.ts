import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Student } from './student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.page.html',
  styleUrls: ['./all-students.page.scss'],
})
export class AllStudentsPage implements OnInit {

  student: Array<Student>;
  items: Array<Student>;

  constructor(private api: APIService,  private router: Router) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.api.getAllStudents().subscribe((data: Array<Student>) => {
      this.items = data;
      this.student = data;
    });
  }

  initializeItems() {
    this.items = this.student;
  }

  clickCard(studentId){
    this.router.navigate(['see-student-info',studentId]);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.first_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
