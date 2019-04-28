import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.page.html',
  styleUrls: ['./home-student.page.scss'],
})
export class HomeStudentPage implements OnInit {

  public dataLogin : Array<Object> = [];
  public turma: Array<Object> =[];

  constructor(private router: Router) {
    /*
      get api/turmas/id todas as turmas daquela pessoa
    */

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
      "status": "off",
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
    }, {
      "id": "789",
      "name": "Palestra tema X",
      "typeOfClass": "Turma Livre",
      "location": "Sala SSP",
      "weekday": "Quarta-feira",
      "startingWeek": "20",
      "endingWeek": "46",
      "status": "waiting",
      "startTime": "20:00",
      "endTime": "21:300",
      "collaborators": [
        {
          "id": "123124",
          "name": "Ronaldo",
          "email": "fulano.tal@gmail.com",
          "phone": "19999091120"
        }
      ]
    },
   ]

    this.dataLogin = [
      {
        "id": "123",
        "name:": "Joao",
        "email": "a@a.com",
        "phone": "111111111",
        "permission": "administrators",
        //collaborators,student,administrators
      }
    ]

  
  }

  clickCard(id) {
    this.router.navigate(['minha-turma']);
  }

  clickPlus() {
    this.router.navigate(['cadastrar-novo-curso-student'])
  }

  ngOnInit() {
  }

}
