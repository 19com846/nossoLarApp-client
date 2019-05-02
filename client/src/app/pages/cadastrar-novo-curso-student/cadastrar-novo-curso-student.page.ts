import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router'
import { StaticAPIService } from 'src/app/services/static-api.service';

@Component({
  selector: 'app-cadastrar-novo-curso-student',
  templateUrl: './cadastrar-novo-curso-student.page.html',
  styleUrls: ['./cadastrar-novo-curso-student.page.scss'],
})
export class CadastrarNovoCursoStudentPage implements OnInit {

  public turmas: Array<Object> = [];

  constructor(public alertController: AlertController,
              private router: Router,
              private route: ActivatedRoute,
              private api: StaticAPIService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.getOpenTurmas(id);
  }

  getOpenTurmas(id: number) {
    this.api.getOpenTurmas(id).subscribe((data: Array<object>) => {
      this.turmas = data;
      // console.log(data);
    });
  }

  cardClicked(turma) {
    this.router.navigate(['home-student']);
  }

  async presentAlertConfirm(turma) {
    const alert = await this.alertController.create({
      header: 'Confirmar!',
      message: 'Informações da Turma: \n' + turma.course + ' - ' + turma.title + ' - ' + turma.time  +
                '\n Você deseja mesmo se candidatar para essa turma?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //console.log('Confirm Cancel: ');
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
