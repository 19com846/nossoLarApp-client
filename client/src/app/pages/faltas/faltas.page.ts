import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faltas',
  templateUrl: './faltas.page.html',
  styleUrls: ['./faltas.page.scss'],
})
export class FaltasPage implements OnInit {
  public faltas: Array<Object> =[];
  public numeroFaltas: number;
  public aux=1;
  constructor() {

    this.faltas = [
      { 
        "id": "123125",
        "classId": "123897",
        "weekNumber": "01",
        "weekday": "segunda", 
        "fullpresence": false, 
        "replacementClass": true },
      { 
      "id": "123125",
      "classId": "123897",
      "weekNumber": "02",
      "weekday": "segunda", 
      "fullpresence": true, 
      "replacementClass": true }
      ,{ 
      "id": "123125", 
      "classId": "123897", 
      "weekNumber": "03", 
      "weekday": "terça", 
      "fullpresence": true, 
      "replacementClass": false }, 
      { 
      "id": "123125", 
      "classId": "123897", 
      "weekNumber": "04", 
      "weekday": "terça", 
      "fullpresence": true, 
      "replacementClass": false },
       { 
      "id": "123125", 
      "classId": "123897", 
      "weekNumber": "05", 
      "weekday": "quarta", 
      "fullpresence": false, 
      "replacementClass": true } ]

      this.numeroFaltas = this.faltas.filter(item=> item["fullpresence"]===false).length;
      
    
   }
   
   
  ngOnInit() {
  }

}
