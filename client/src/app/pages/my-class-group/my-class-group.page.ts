import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticAPIService } from 'src/app/services/static-api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-my-class-group',
  templateUrl: './my-class-group.page.html',
  styleUrls: ['./my-class-group.page.scss'],
})
export class MyClassGroupPage implements OnInit {
  public turma: any;
  public collaborators: any;

  constructor(private route: ActivatedRoute, private router: Router, private api: StaticAPIService) { }

  goToMyAbscences() {
    this.router.navigate(['abscences']);
  }
  tranferClassGroup() {
    this.router.navigate(['transfer-class-group']);
  }

  getTurma(id: String) {
    this.api.getTurmaDetails(id).subscribe((data: Array<object>) => {
      this.turma = data;
      this.getCollaborators(this.turma);
      console.log(this.turma);
    });
  }

  getCollaborators(turma: any) {
    this.collaborators = _.get(turma, '[0].collaborators');
    console.log(this.collaborators);
  }

  ngOnInit() {
    // const id = this.route.snapshot.params.id;
    const id = '1';
    this.getTurma(id);
  }

}
