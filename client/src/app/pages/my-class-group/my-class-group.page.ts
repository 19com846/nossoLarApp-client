import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import * as _ from 'lodash';
import { ClassGroup } from 'src/app/interfaces/class-group';

@Component({
  selector: 'app-my-class-group',
  templateUrl: './my-class-group.page.html',
  styleUrls: ['./my-class-group.page.scss'],
})
export class MyClassGroupPage implements OnInit {
  public classGroups: Array<ClassGroup>;
  public collaborators: any;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private api: APIService) { }

  goToMyAbsences() {
    this.router.navigate(['absences']);
  }
  tranferClassGroup() {
    this.router.navigate(['transfer-class-group']);
  }

  getClassGroupDetails(id: Number) {
    this.api.getClassGroupDetails(id).subscribe((data: Array<ClassGroup>) => {
      this.classGroups = data;
      this.getCollaborators(this.classGroups);
      console.log(this.classGroups);
    });
  }

  getCollaborators(classGroups: any) {
    this.collaborators = _.get(classGroups, '[0].collaborators');
    console.log(this.collaborators);
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getClassGroupDetails(id);
  }

}
