import { allAttendance } from './../../interfaces/allAttendance';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api.service';
import { Headers, Http, RequestOptions  } from '@angular/http';

@Component({
  selector: 'app-all-attendance-group',
  templateUrl: './all-attendance-group.page.html',
  styleUrls: ['./all-attendance-group.page.scss'],
})
export class AllAttendanceGroupPage implements OnInit {
  idClass: number;
  lessonId: number;
  allAttendance: Array<allAttendance>
  constructor(private router: Router, private api: APIService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.idClass = Number(this.route.snapshot.paramMap.get('idClass'));
    this.lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));
    this.getAllAttendance(this.lessonId);
  }

  getAllAttendance(idLesson){
    this.api.getAllAttendance(idLesson).subscribe((data: Array<allAttendance>) => {
      this.allAttendance = data;
      console.log(data);
      this.allAttendance.sort(this.compare);
    
  });
  
}
  compare(a,b) {
    if ( a.student.first_name < b.student.first_name ){
      return -1;
    }
    if ( a.student.first_name > b.student.first_name ){
      return 1;
    }
    return 0;
  }
  


  
changeAttendance(attendance){
  var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });
    const body = {
      "student_id": attendance.student.id,
      "was_present": !attendance.was_present,
    }
    this.api.postNewAttendance(this.lessonId,attendance.id,body,requestOptions);
}
}
