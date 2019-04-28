import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacao-turma',
  templateUrl: './informacao-turma.page.html',
  styleUrls: ['./informacao-turma.page.scss'],
})
export class InformacaoTurmaPage implements OnInit {
  public turma: Array < Object > = [];

  constructor(public alertController: AlertController, private router: Router, private navCtrl:NavController) { 
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
    }
  ]
  }

  async relatorio(){
    console.log("entrou")
    const alert = await this.alertController.create({
      header: 'Digite o email para receber o relatório!',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'administation@nossolar.com.br'
        }
      ],
      buttons: [
        {
          text: 'confirm',
          role: 'confirm',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm send');
          }
        }
      ]
      })
      await alert.present();
    }

    verAlunos(){
    this.router.navigate(['alunos-do-ciclo']);
    }

    changeRoll(){
    this.router.navigate(['chamada']);

    }
    pop(){
      this.navCtrl.pop();
    }

  ngOnInit() {
  }

}
