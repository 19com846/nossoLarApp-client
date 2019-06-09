import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { Attendance } from 'src/app/interfaces/attendance';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.page.html',
  styleUrls: ['./absences.page.scss'],
})
export class AbsencesPage implements OnInit {

  public attendances: Array<Attendance>;
  private classGroupId: Number;
  private studentId: Number;

  constructor(private route: ActivatedRoute, private api: APIService) { }

  ngOnInit() {
    // const id = this.route.snapshot.params.id;
    this.classGroupId = Number(this.route.snapshot.paramMap.get('classGroupId'));
    // this.studentId = Number(this.route.snapshot.paramMap.get('studentId'));
    this.studentId = 4;
    this.getAbsences(this.studentId, this.classGroupId);
  }

  getAbsences(studentId: Number, classGroupId: Number) {
    this.api.getAbsences(studentId, classGroupId).subscribe((data: Array<Attendance>) => {
      this.attendances = data;
    });
  }
}
