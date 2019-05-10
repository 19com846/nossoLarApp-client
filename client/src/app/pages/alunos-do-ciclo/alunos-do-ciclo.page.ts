import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alunos-do-ciclo',
  templateUrl: './alunos-do-ciclo.page.html',
  styleUrls: ['./alunos-do-ciclo.page.scss'],
})
export class AlunosDoCicloPage implements OnInit {

  public alunos: Array < Object > = [];

  constructor(private router: Router, private navCtrl: NavController) {
    this.alunos= [ 
      {
      "id": "13541",
      "name": "Joao",
      "email":"jjjfofa@ok.com",
      "telefone": "(19)996587444",
      "permission": "student",
      "cursos":[{
        "id": "123",
        "name": "Ciclo 01",
        "typeOfClass": "Ciclo",
        "location": "Sala 7/8",
        "weekday": "segunda-feira",
        "startingWeek": "20",
        "endingWeek": "46",
        "startTime": "22:00",
        "status": "on",
        "students":"100",
        "endTime": "23:30",
        "collaborators": [{
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
        "id": "12553",
        "name": "Ciclo 03",
        "typeOfClass": "Ciclo",
        "location": "Sala 7/8",
        "weekday": "segunda-feira",
        "startingWeek": "20",
        "students":"50",
        "endingWeek": "46",
        "startTime": "2:00",
        "status": "on",
        "endTime": "3:30",
        "collaborators": [{
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
        "collaborators": [{
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
      }]
    },
    {
      "id": "17522",
      "name": "marcio",
      "email":"jgvbrsfgfa@fffaaer.com",
      "telefone": "(19)245862415",
      "permission": "student",
      "cursos":[{
        "id": "123",
        "name": "Ciclo 01",
        "typeOfClass": "Ciclo",
        "location": "Sala 7/8",
        "weekday": "segunda-feira",
        "startingWeek": "20",
        "endingWeek": "46",
        "startTime": "22:00",
        "status": "on",
        "students":"100",
        "endTime": "23:30",
        "collaborators": [{
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
        "id": "12553",
        "name": "Ciclo 03",
        "typeOfClass": "Ciclo",
        "location": "Sala 7/8",
        "weekday": "segunda-feira",
        "startingWeek": "20",
        "students":"50",
        "endingWeek": "46",
        "startTime": "2:00",
        "status": "on",
        "endTime": "3:30",
        "collaborators": [{
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
        "collaborators": [{
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
      }]
    },
    {
      "id": "125896",
      "name": "Ana",
      "email":"aninha@ok.com",
      "telefone": "(19)478896552",
      "permission": "student",
      "cursos":[{
        "id": "123",
        "name": "Ciclo 01",
        "typeOfClass": "Ciclo",
        "location": "Sala 7/8",
        "weekday": "segunda-feira",
        "startingWeek": "20",
        "endingWeek": "46",
        "startTime": "22:00",
        "status": "on",
        "students":"100",
        "endTime": "23:30",
        "collaborators": [{
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
        "id": "12553",
        "name": "Ciclo 03",
        "typeOfClass": "Ciclo",
        "location": "Sala 7/8",
        "weekday": "segunda-feira",
        "startingWeek": "20",
        "students":"50",
        "endingWeek": "46",
        "startTime": "2:00",
        "status": "on",
        "endTime": "3:30",
        "collaborators": [{
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
        "collaborators": [{
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
      }]
    }
  ]
  }

  details(alunos) {
    this.router.navigate(['student-details']);
  }
  pop() {
    this.navCtrl.pop();
  }

  ngOnInit() {
  }

}
