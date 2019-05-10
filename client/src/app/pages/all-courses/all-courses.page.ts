import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.page.html',
  styleUrls: ['./all-courses.page.scss'],
})
export class AllCoursesPage implements OnInit {

  public turma: Array < Object > = [];

  constructor(private router: Router, private navCtrl: NavController) {
    this.turma = [{
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
      },
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
      }
    ]
  }

  clickCard(turma){
    
    this.router.navigate(['informacao-turma']);
  }
  pop(){
    this.navCtrl.pop();
  }
  createClass(){
    console.log("clickou")
    this.router.navigate(['create-class']);
  }

  ngOnInit() {}
}
