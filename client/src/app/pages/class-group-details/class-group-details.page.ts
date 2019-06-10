import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-class-group-details',
  templateUrl: './class-group-details.page.html',
  styleUrls: ['./class-group-details.page.scss'],
})
export class ClassGroupDetailsPage implements OnInit {

  public classGroup: any;
  public students: any;
  public studentCount = 0;

  constructor(public alertController: AlertController,
              private router: Router,
              private api: APIService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    const classGroupId = Number(this.route.snapshot.paramMap.get('id'));
    this.getClassGroupDetails(classGroupId);
    // this.getAllStudents();
  }


  getClassGroupDetails(id: Number) {
    this.api.getClassGroupDetails(id).subscribe((data: Array<object>) => {
      this.classGroup = data;
    });
  }

  getAllStudents() {
    this.api.getAllStudents().subscribe((data: Array<object>) => {
      this.students = data;
      this.students.forEach(() => {
        this.studentCount += 1;
      });
    });
  }

  async report() {
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
          text: 'Confirmar',
          role: 'confirm',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm send');
          }
        }
      ]
      });
      await alert.present();
    }

  goToAllStudents() {
    this.router.navigate(['all-students']);
  }

  goToRollCall() {
  this.router.navigate(['attendance']);
  }

}
