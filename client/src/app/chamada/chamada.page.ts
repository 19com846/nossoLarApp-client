import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.page.html',
  styleUrls: ['./chamada.page.scss'],
})
export class ChamadaPage implements OnInit {

  public turma: Array < Object > = [];
  public selectedArray :any = [];

  constructor(private router: Router) { 

    this.turma = [
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
      }]

  }

  ngOnInit() {
  }

  selectMember(data){
   
    if (data.attendance1 === false) {
       this.selectedArray.push(data);
     } else {
       
      let names = this.selectedArray.filter(j=> j.id !== data.id);
      this.selectedArray = names;
      
    }
    
   }
   
   finalizar() {
    console.log(this.selectedArray)
     alert("presença dadas para os alunos: "+ this.selectedArray.name)
     this.router.navigate(['selecionar-turma-para-chamada']);
   }
}
