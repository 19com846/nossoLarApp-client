import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.page.html',
  styleUrls: ['./new-transfer.page.scss'],
})
export class NewTransferPage implements OnInit {

  public turmas: Array<Object> =[];
  public students: any = [];

  constructor(private navCtrl:NavController) {
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
    this.turmas = [{
      "name":"turma de comp"
    },{
      "name":"turma de mec"
    },{
      "name":"turma de dir"
    },{
      "name":"turma de prod"
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

  stopPropagation($event){
   event.stopPropagation();
  }

  transferConfirm(){
    alert("ok")
  }
  pop(){
    this.navCtrl.pop();
  }

}
