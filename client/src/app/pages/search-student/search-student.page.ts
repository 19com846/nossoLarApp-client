import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.page.html',
  styleUrls: ['./search-student.page.scss'],
})
export class SearchStudentPage implements OnInit {

  public students: any = [];

  constructor(private router: Router, private alertController:AlertController) {
    this.students = [{
      "name":"joao",
      expanded: false
    },{
      "name":"pedro",
      expanded: false
    },{
      "name":"paulo",
      expanded: false
    },]
   }

  ngOnInit() {
  }
  
  expandItem(student): void {
    if (student.expanded) {
      student.expanded = false;
    } else {
      this.students.map(listStudent => {
        if (student == listStudent) {
          listStudent.expanded = !listStudent.expanded;
        } else {
          listStudent.expanded = false;
        }
        return listStudent;
      });
    }
  }

  editStudent($event){
    this.router.navigate(['student-details']);    
    event.stopPropagation();
   }

   async aprovarStudent($event, student) {
    event.stopPropagation();

    console.log(student);

    const alert = await this.alertController.create({
      header: student.name ,
      subHeader: this.students[0].grade,
      message: 'Deseja aprovar este aluno?',
      buttons: ['Cancelar', 'Aprovar']
    });
    await alert.present();

  }

}
