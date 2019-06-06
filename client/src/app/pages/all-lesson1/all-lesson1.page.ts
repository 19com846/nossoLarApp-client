import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api.service';
import { ClassGroup } from '../../interfaces/class-group';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-all-lesson1',
  templateUrl: './all-lesson1.page.html',
  styleUrls: ['./all-lesson1.page.scss'],
})
export class AllLesson1Page implements OnInit {
  idClass: number;
  public lesson: any = [];

  constructor(private router: Router, private api: APIService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.idClass = Number(this.route.snapshot.paramMap.get('idClass'));
    this.getAllLessons(this.idClass);
  }

  getAllLessons(id) {
    this.api.getAllLesson(id).subscribe((data: Array<Course>)=> {
      this.lesson = data;
      console.log(this.lesson)
    });  
  }

  clickCardLesson(lesson) {
    const lessonId = lesson.id;
    this.router.navigate(['all-attendance-group',this.idClass,lessonId]);
  }

}
