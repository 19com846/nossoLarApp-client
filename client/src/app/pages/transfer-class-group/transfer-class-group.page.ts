import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StaticAPIService } from 'src/app/services/static-api.service';

@Component({
  selector: 'app-transfer-class-group',
  templateUrl: './transfer-class-group.page.html',
  styleUrls: ['./transfer-class-group.page.scss'],
})
export class TransferClassGroupPage implements OnInit {

  public turmas: any;

  constructor(public alertController: AlertController, private router: Router, private api: StaticAPIService) { }

  cardClicked(turma) {
    this.router.navigateByUrl('/menu/menu/home-student');
  }

  ngOnInit() {
    // const id = this.route.snapshot.params.id;
    const studentId = '1';
    const courseId = '2';
    this.getTransferClassGroups(studentId, courseId);
  }

  getTransferClassGroups(studentId: String, courseId: String) {
    this.api.getTransferClassGroups(studentId, courseId).subscribe((data: Array<object>) => {
      this.turmas = data;
      console.log(data);
    });
  }

  async presentAlertConfirm(turma) {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Você deseja mesmo transferir sua turma para a ' + turma.title + ' ?',
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
            this.cardClicked(turma);
          }
        }
      ]
    });

    await alert.present();
  }
}
