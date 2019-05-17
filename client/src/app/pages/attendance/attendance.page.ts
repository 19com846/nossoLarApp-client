import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  public turma: any;
  public selectedArray: any = [];

  constructor(private navCtrl: NavController) { this.turma = [
    {
      "id": "1",
      "name": "Joao",
      attendance1 : false,
      "attendance2": "false",
    },{
      "id": "2",
      "name": "Guilherme",
      attendance1: false,
      "attendance2": "false", 
    },{
      "id": "3",
      "name": "Jorge",
      attendance1: false,
      "attendance2": "false", 
    },{
      "id": "4",
      "name": "Ariel",
      attendance1: false,
      "attendance2": "false", 
    },{
      "id": "5",
      "name": "Salmo",
      attendance1: false,
      "attendance2": "false", 
    },{
      "id": "6",
      "name": "Savio",
      attendance1: false,
      "attendance2": "false", 
    }
  ]

}

ngOnInit() {
}

selectMember(data) {

  if (data.attendance1 === false) {
     this.selectedArray.push(data);
   } else {
    let names = this.selectedArray.filter(j=> j.id !== data.id);
    this.selectedArray = names;

  }
 }

 finalizar() {
  console.log(this.selectedArray)
   this.navCtrl.pop();
 }

}
