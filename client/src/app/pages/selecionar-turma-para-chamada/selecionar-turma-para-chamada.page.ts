import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { StaticAPIService } from 'src/app/services/static-api.service';

@Component({
  selector: 'app-selecionar-turma-para-chamada',
  templateUrl: './selecionar-turma-para-chamada.page.html',
  styleUrls: ['./selecionar-turma-para-chamada.page.scss'],
})
export class SelecionarTurmaParaChamadaPage implements OnInit {
  public turmasParaChamada: any;

  constructor(private router: Router, private api: StaticAPIService, private route: ActivatedRoute) { }

  ngOnInit() {
    const collaboratorID = this.route.snapshot.params.id; //use it below
    this.getTurmasParaChamada('123908');
  }

  getTurmasParaChamada(collaboratorID: String) {
    this.api.getTurmasToAssessPresence(collaboratorID).subscribe((data: Array<object>) => {
      this.turmasParaChamada = data;
    });
  }

  clickOnTurma(turmaID: String) {
    this.router.navigate(['chamada']);
  }

}
