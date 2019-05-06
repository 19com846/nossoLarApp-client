import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticAPIService } from 'src/app/services/static-api.service';

@Component({
  selector: 'app-transferencia-student',
  templateUrl: './transferencia-student.page.html',
  styleUrls: ['./transferencia-student.page.scss'],
})
export class TransferenciaStudentPage implements OnInit {

  public turmas: any;

  constructor(public alertController: AlertController, 
              private route: ActivatedRoute, 
              private router: Router,
              private api: StaticAPIService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.getOpenTurmas(id);
  }

  getOpenTurmas(id: String) {
    this.api.getOpenTurmasOfCourse(id).subscribe((data: Array<object>) => {
      this.turmas = data;
    });
  }

  cardClicked(turma) {
    this.router.navigate(['home-student']);
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
          handler: () => { }
        }, {
          text: 'SIM !',
          handler: () => {
            this.cardClicked(turma);
          }
        }
      ]
    });

    await alert.present();
  }

}
