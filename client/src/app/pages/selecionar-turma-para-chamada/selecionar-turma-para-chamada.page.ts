import { Component,  OnInit,} from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-selecionar-turma-para-chamada',
  templateUrl: './selecionar-turma-para-chamada.page.html',
  styleUrls: ['./selecionar-turma-para-chamada.page.scss'],
})
export class SelecionarTurmaParaChamadaPage implements OnInit {
  public turma: Array < Object > = [];

  constructor( private router: Router) {

    this.turma = [
      {
        "id": "123",
        "name": "Ciclo 01",
        "typeOfClass": "Ciclo",
        "location": "Sala 7/8",
        "weekday": "segunda-feira",
        "startingWeek": "20",
        "endingWeek": "46",
        "startTime": "22:00",
        "status": "on",
        "endTime": "23:30",
        "collaborators": [
          {
            "id": "123124",
            "name": "Fulano de Tal",
            "email": "fulano.tal@gmail.com",
            "phone": "19999091120"
          },
          {
            "id": "897987",
            "name": "Sicrano",
            "email": "sicrano.silva@hotmail.com",
            "phone": "null"
          }
        ]
      },
      {
        "id": "456",
        "name": "Ciclo 02",
        "typeOfClass": "Turma Livre",
        "location": "Sala SSP",
        "weekday": "sabado",
        "startingWeek": "20",
        "endingWeek": "46",
        "status": "on",
        "startTime": "13:00",
        "endTime": "15:30",
        "collaborators": [
          {
            "id": "123124",
            "name": "Joaozin",
            "email": "fulano.tal@gmail.com",
            "phone": "19999091120"
          },
          {
            "id": "897987",
            "name": "Sicrano",
            "email": "sicrano.silva@hotmail.com",
            "phone": "null"
          }
        ]
      }
     ]
    }

    clickCard(turma){
      this.router.navigate(['chamada']);
    }

  ngOnInit() {}

}