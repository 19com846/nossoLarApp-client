import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-transfer-class-group',
  templateUrl: './transfer-class-group.page.html',
  styleUrls: ['./transfer-class-group.page.scss'],
})
export class TransferClassGroupPage implements OnInit {

  public classGroups: any;

  constructor(public alertController: AlertController, private router: Router, private api: APIService) { }

  cardClicked(classGroup) {
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
      this.classGroups = data;
      console.log(data);
    });
  }

  async presentAlertConfirm(classGroup) {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Você deseja mesmo transferir sua turma para a ' + classGroup.title + ' ?',
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
            this.cardClicked(classGroup);
          }
        }
      ]
    });

    await alert.present();
  }
}
