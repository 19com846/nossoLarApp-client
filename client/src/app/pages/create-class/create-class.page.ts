import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Course } from '../../interfaces/course';
import { APIService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions  } from '@angular/http';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.page.html',
  styleUrls: ['./create-class.page.scss'],
})
export class CreateClassPage implements OnInit {

  title: string;
  classroom: string;
  time: string;
  year: string;
  teacher_id: number;
  selectedCourse: string='';

  public course: Array<Course>;

  constructor(private navCtrl:NavController, private router: Router, private api: APIService) { }

  createClass(){
    const getCourse = this.course.filter(c=> {
      return c.name == this.selectedCourse;
    });

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });
    let body = {
      "teacher_id": 4,
      "course_id": getCourse[0].id,
     "title": this.title,
     "classroom": this.classroom,
     "time": this.time,
     "semester": "s",
     "year": this.year,
    }
    this.api.postClassGroup(body,requestOptions);
  }
  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses() {
    this.api.getAllCourses().subscribe((data: Array<Course>)=> {
      this.course = data;
      console.log(this.course)
    });  
  }
  
}
