import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../services/api.service';
import { ClassGroup } from '../../interfaces/class-group';
import * as _ from 'lodash';

@Component({
  selector: 'app-class-group-attendance',
  templateUrl: './class-group-attendance.page.html',
  styleUrls: ['./class-group-attendance.page.scss'],
})

export class ClassGroupAttendancePage implements OnInit {
  
  private classGroups: Array<ClassGroup>;
  private collaboratorId: Number;

  constructor(private router: Router, private api: APIService) {}

  ngOnInit() {
    // TO DO - Needs Auth to use this implementation
    // this.collaboratorId = this.route.snapshot.paramMap.get('classGroupId')
    this.collaboratorId = 4;
    this.getCollaboratorClassGroups(this.collaboratorId);
  }
  
  goToTakeAttendance(classGroup: ClassGroup){
    this.router.navigate(['attendance', classGroup.id]);
  }

  getCollaboratorClassGroups(collaboratorId: Number): Array<ClassGroup>{
    this.api.getCollaboratorClassGroups(collaboratorId).subscribe((data: Array<ClassGroup>)=> {
      this.classGroups = data;
      console.log(data);
    });  
    return this.classGroups;
  }
}
