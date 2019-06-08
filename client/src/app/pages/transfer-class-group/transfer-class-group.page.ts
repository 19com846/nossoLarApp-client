import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../../services/api.service';
import { ClassGroup } from '../../interfaces/class-group';
import { TransferRequest } from '../../interfaces/transfer-request';

@Component({
  selector: 'app-transfer-class-group',
  templateUrl: './transfer-class-group.page.html',
  styleUrls: ['./transfer-class-group.page.scss'],
})
export class TransferClassGroupPage implements OnInit {

  public classGroups: Array<ClassGroup>;
  private classGroupId: Number;
  private studentId: Number;
  private transferRequest: TransferRequest = {
    student_id: 0,
    class_group_id: 0,
    target_group_id: 0,
  };

  constructor(public alertController: AlertController, 
              private router: Router, 
              private api: APIService,
              private route: ActivatedRoute) { }

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

  requestClassGroupTransfer(transferRequest: TransferRequest) {
    this.api.requestClassGroupTransfer(transferRequest).subscribe((data) => {
      console.log("Transfer Request Successful");
      console.log(data);
    })
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
            this.transferRequest.class_group_id = this.classGroupId;
            this.transferRequest.student_id = this.studentId;
            this.transferRequest.target_group_id = classGroup.id;
            this.requestClassGroupTransfer(this.transferRequest);
            this.router.navigate(['home-student']);
          }
        }
      ]
    });
    await alert.present();
  }
}
