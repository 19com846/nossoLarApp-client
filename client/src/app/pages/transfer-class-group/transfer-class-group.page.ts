import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { ClassGroup } from 'src/app/interfaces/class-group';

@Component({
  selector: 'app-transfer-class-group',
  templateUrl: './transfer-class-group.page.html',
  styleUrls: ['./transfer-class-group.page.scss'],
})
export class TransferClassGroupPage implements OnInit {

  public classGroups: Array<ClassGroup>;
  private classGroupId: Number;
  private studentId: Number;
  private transferRequest: any;

  constructor(public alertController: AlertController, 
              private router: Router, 
              private api: APIService,
              private route: ActivatedRoute) { }

  cardClicked(classGroup) {
    this.router.navigateByUrl('/menu/menu/home-student');
  }

  ngOnInit() {
    this.classGroupId = Number(this.route.snapshot.paramMap.get('classGroupId'));
    // this.studentId = Number(this.route.snapshot.paramMap.get('studentId'));
    this.studentId = 4;
    this.getTransferClassGroups(this.studentId, this.classGroupId);
    
  }

  getTransferClassGroups(studentId: Number, classGroupId: Number) {
    this.api.getTransferClassGroups(studentId, classGroupId).subscribe((data: Array<ClassGroup>) => {
      this.classGroups = data;
      console.log(data);
    });
  }

  async presentAlertConfirm(classGroup: ClassGroup) {
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
            // this.cardClicked(classGroup);
            this.transferRequest = {
              "enrollment_id": this.studentId,
              "target_group_id": this.classGroupId
            }
            this.router.navigate(['home-student']);
          }
        }
      ]
    });
    await alert.present();
  }
}
