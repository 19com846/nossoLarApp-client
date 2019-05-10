import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-class-group',
  templateUrl: './transfer-class-group.page.html',
  styleUrls: ['./transfer-class-group.page.scss'],
})
export class TransferClassGroupPage implements OnInit {

  public turma: Array<Object> =[];

  constructor(public alertController: AlertController, private router: Router) { 


    
  this.turma = [
    {
      "id": "123",
      "name": "Ciclo 02",
      "turma": "Turma 1",
      "typeOfClass": "Ciclo",
      "location": "Sala 7/8",
      "weekday": "Segunda-feira",
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
      "turma": "Turma 2",
      "typeOfClass": "Ciclo",
      "location": "Sala SSP",
      "weekday": "Sábado",
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
      "name": "Ciclo 02",
      "turma": "Turma 3",
      "typeOfClass": "Ciclo",
      "location": "Sala SSP",
      "weekday": "Domingo",
      "startingWeek": "20",
      "endingWeek": "46",
      "status": "waiting",
      "startTime": "08:00",
      "endTime": "10:30",
      "collaborators": [
        {
          "id": "123124",
          "name": "Joaozin",
          "email": "fulano.tal@gmail.com",
          "phone": "19999091120"
        }
      ]
    },
   ]
  }

  cardClicked(turmas) {
    
    this.router.navigateByUrl('/menu/menu/home-student');
  }
  ngOnInit() {
  }

  async presentAlertConfirm(turmas) {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: "Você deseja mesmo transferir sua turma para a "+turmas.turma+" ?",
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM !',
          handler: () => {
            console.log('Confirm Okay');
            this.cardClicked(turmas);
          }
        }
      ]
    });

    await alert.present();
  }
}
