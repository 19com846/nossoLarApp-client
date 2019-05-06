import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticAPIService } from '../../services/static-api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-minha-turma',
  templateUrl: './minha-turma.page.html',
  styleUrls: ['./minha-turma.page.scss'],
})
export class MinhaTurmaPage implements OnInit {
  public turma: any;
  public collaborators: any;

  constructor(private route: ActivatedRoute, private router: Router, private api: StaticAPIService) {  }

  goToMyPresences() {
    this.router.navigate(['faltas']);
  }

  goToTransferTurma(id: number) {
    this.router.navigate(['transferencia-student']);
  }

  transferencia() {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.getTurma(id);
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

}
