import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ClassGroup } from '../../interfaces/class-group';
import { APIService } from 'src/app/services/api.service';
import { NewEnrollment } from 'src/app/interfaces/new-enrollment';

@Component({
  selector: 'app-enroll-in-class-group',
  templateUrl: './enroll-in-class-group.page.html',
  styleUrls: ['./enroll-in-class-group.page.scss'],
})
export class EnrollInClassGroupPage implements OnInit {

  private classGroups: Array<ClassGroup>;
  private studentId: Number;
  private newEnrollment: NewEnrollment = {
    student_id: 0,
    class_group_id: 0
  }

  constructor(public alertController: AlertController, 
              private router: Router,
              private api: APIService) { }

  ngOnInit() {
    //  this.studentId = this.route.snapshot.params.id;
    this.studentId = 4;
    this.getAvailableClassGroups(this.studentId);
  }

  getAvailableClassGroups(studentId: Number) {
    this.api.getAvailableClassGroups(studentId).subscribe((data: Array<ClassGroup>) => {
      this.classGroups = data;
    })
  }

  enrollInNewClassGroup(studentId: Number, classGroupId: Number) {
    this.newEnrollment.class_group_id = classGroupId;
    this.newEnrollment.student_id = studentId;
    
    this.api.enrollInNewClassGroup(this.newEnrollment).subscribe((data: any) => {
      console.log("Enrollment Request Successfull");
    })
  }

  // cardClicked(turmas) {
  //   this.router.navigateByUrl('/menu/menu/home-student');
  // }

  async presentAlertConfirm(classGroup: ClassGroup) {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: "Você deseja mesmo se candidatar para o curso: " + classGroup.title + " ?",
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: cancelado');
          }
        }, {
          text: 'SIM !',
          handler: () => {
            console.log('Confirmed');
            this.enrollInNewClassGroup(this.studentId, classGroup.id);
          }
        }
      ]
    });
    await alert.present();
}
}
