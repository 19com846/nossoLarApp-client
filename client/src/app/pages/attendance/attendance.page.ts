import { Enrollment } from 'src/app/interfaces/enrollment';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { Headers, Http, RequestOptions  } from '@angular/http';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  private classGroupId: Number;
  private courseId: Number;
  public turma: any;
  public selectedArray: any = [];
  enrollment: Array<Enrollment>;

 public lesson: any;

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private api: APIService) {
      
     }

ngOnInit() {
  this.classGroupId = Number(this.route.snapshot.paramMap.get('classGroupId'));
  this.getEnrollment(this.classGroupId);
}

getEnrollment(id) {
  this.api.getClassGroupEnrollment(id).subscribe((data: Array<Enrollment>) => {
    this.enrollment = data;
  }); 
}

selectMember(data) {
  if(!data.attendance) {
    this.selectedArray.push(data);
  } else {
  if (data.attendance === false) {
     this.selectedArray.push(data);
   } else {
    let names = this.selectedArray.filter(j=> j.id !== data.id);
    this.selectedArray = names;
   }
}
 }

 finalizar() {
   //postar lesson
   var headers = new Headers();
   headers.append("Accept", 'application/json');
   headers.append('Content-Type', 'application/json' );
   const requestOptions = new RequestOptions({ headers: headers });
   let body;
  this.api.postClassGroupLesson(this.classGroupId,body,requestOptions).subscribe((data) => {
   this.lesson =  data;
    var a = '';
  
    for(let i=0; i<this.selectedArray.length;i++){
      console.log('teste '+this.selectedArray[i].id)
        if (i+1===this.selectedArray.length) {
          a = a + '{"student_id": '+this.selectedArray[i].id+',"was_present":'+this.selectedArray[i].attendance+'}';
        }
        else {
          a = a + '{"student_id": '+this.selectedArray[i].id+',"was_present":'+this.selectedArray[i].attendance+'},';
        }
    }
    console.log('a ' +a)
  body = '{"roll_call": ['+a+']}';
  console.log('body '+body)
  var obj = JSON.parse(body);
  this.api.postLessonRollCall(this.lesson.id,obj,requestOptions).subscribe((data) => {
    console.log(data);
   }); 
  }); 
  
  

}
}


