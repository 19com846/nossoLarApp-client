import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enroll-in-course',
  templateUrl: './enroll-in-course.page.html',
  styleUrls: ['./enroll-in-course.page.scss'],
})
export class EnrollInCoursePage implements OnInit {

  public turma: Array<Object> =[];

  constructor(public alertController: AlertController, private router: Router) {
    this.turma = [
      {
        "id": "123",
        "name": "Curso em X",
        "typeOfClass": "Turma Livre",
        "location": "Sala 7/8",
        "weekday": "Segunda-feira",
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
        "name": "Constelações",
        "typeOfClass": "Palestra",
        "location": "Sala SSP",
        "weekday": "Sabado",
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
  }

  ngOnInit() {
  }

  cardClicked(turmas) {
    this.router.navigateByUrl('/menu/menu/home-student');
  }

  async presentAlertConfirm(turmas) {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: "Você deseja mesmo se candidatar para o curso: "+turmas.name+" ?",
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
