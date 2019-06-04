import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api.service';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-all-attendance-group',
  templateUrl: './all-attendance-group.page.html',
  styleUrls: ['./all-attendance-group.page.scss'],
})
export class AllAttendanceGroupPage implements OnInit {
  idClass: number;
  lessonId: number;
  constructor(private router: Router, private api: APIService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.idClass = Number(this.route.snapshot.paramMap.get('idClass'));
    this.lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));
    console.log(this.idClass);
    console.log(this.lessonId);
  }

}
