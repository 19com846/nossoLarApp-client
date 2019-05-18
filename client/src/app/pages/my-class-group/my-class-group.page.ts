import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-my-class-group',
  templateUrl: './my-class-group.page.html',
  styleUrls: ['./my-class-group.page.scss'],
})
export class MyClassGroupPage implements OnInit {
  public classGroups: any;
  public collaborators: any;

  constructor(private router: Router, private api: APIService) { }

  goToMyAbsences() {
    this.router.navigate(['absences']);
  }
  tranferClassGroup() {
    this.router.navigate(['transfer-class-group']);
  }

  getClassGroupDetails(id: String) {
    this.api.getClassGroupDetails(id).subscribe((data: Array<object>) => {
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
    // const id = this.route.snapshot.params.id;
    const id = '1';
    this.getClassGroupDetails(id);
  }

}
