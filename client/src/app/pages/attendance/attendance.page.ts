import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

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

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private api: APIService) {
      
     }

ngOnInit() {
  this.classGroupId = Number(this.route.snapshot.paramMap.get('classId'));
  this.courseId = Number(this.route.snapshot.paramMap.get('courseId'));
  console.log(this.classGroupId);
  console.log(this.courseId);
}

selectMember(data) {

  if (data.attendance1 === false) {
     this.selectedArray.push(data);
   } else {
    let names = this.selectedArray.filter(j=> j.id !== data.id);
    this.selectedArray = names;

  }
 }

 finalizar() {
  console.log(this.selectedArray)
   //this.navCtrl.pop();
 }

}
