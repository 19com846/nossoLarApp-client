import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api.service';
import { ClassGroup } from '../../interfaces/class-group';
import { Course } from '../../interfaces/course';
import * as _ from 'lodash';

@Component({
  selector: 'app-all-class-groups',
  templateUrl: './all-class-groups.page.html',
  styleUrls: ['./all-class-groups.page.scss'],
})
export class AllClassGroupsPage implements OnInit {

  public classGroup: Array<ClassGroup>;
  public course: Array<Course>;
  id: number;
  constructor( private router: Router, private api: APIService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.getAllCourses();
    this.getAllClassGroup();
  }

  getAllCourses() {
    this.api.getAllCourses().subscribe((data: Array<Course>)=> {
      this.course = data;
      console.log(this.course)
    });  
  }

  getAllClassGroup(){
      this.api.getAllClassGroups().subscribe((dataClass: Array<ClassGroup>) => {
        this.classGroup = dataClass;
        console.log(this.classGroup);
      })
  }

  clickCardClass(data) {
    
      const idClass = data.id;
      this.router.navigate(['all-lesson',idClass]);
    
  }
  newClassGroup(){
    this.router.navigate(['create-class']);
  }
}
