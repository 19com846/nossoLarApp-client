import { Lessons } from './../../interfaces/lessons';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api.service';
import { ClassGroup } from '../../interfaces/class-group';
import { Course } from '../../interfaces/course';
import * as _ from 'lodash';

@Component({
  selector: 'app-all-lesson',
  templateUrl: './all-lesson.page.html',
  styleUrls: ['./all-lesson.page.scss'],
})
export class AllLessonPage implements OnInit {
  idClass: number;
  public lesson: Array <Lessons>;

  constructor(private router: Router, private api: APIService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.idClass = Number(this.route.snapshot.paramMap.get('idClass'));
    this.getAllLessons(this.idClass);
  }

  getAllLessons(id) {
    this.api.getAllLesson(id).subscribe((data: Array<Lessons>)=> {
      this.lesson = data;
    });  
  }

  clickCardLesson(lesson) {
    const lessonId = lesson.id;
    this.router.navigate(['all-attendance-group',this.idClass,lessonId]);
  }
}
