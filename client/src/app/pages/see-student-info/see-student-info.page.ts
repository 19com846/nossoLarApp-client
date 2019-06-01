import { Student } from './../all-students/student';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { Enrollment } from 'src/app/interfaces/enrollment';

@Component({
  selector: 'app-see-student-info',
  templateUrl: './see-student-info.page.html',
  styleUrls: ['./see-student-info.page.scss'],
})
export class SeeStudentInfoPage implements OnInit {
  private studentId: Number;
  public student: Student;
  public enrollment: Enrollment;
  public loading: boolean = true;

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private api: APIService) {
      
     }

  ngOnInit() {
    this.studentId = Number(this.route.snapshot.paramMap.get('studentId'));
    this.getStudent(this.studentId);
  }

  getStudent(id) {
    this.api.getStudent(id).subscribe((data: Student)=>{
      this.student = data;
      console.log(data);
    })
    this.getStudentEnrollment(this.studentId);
  }

  getStudentEnrollment(id) {
    this.api.getEnrollments(id).subscribe((data: Enrollment) => {
      this.enrollment = data;
      console.log(data)
      this.loading = false;
    })
  }
}
