import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-transferencia-adm',
  templateUrl: './transferencia-adm.page.html',
  styleUrls: ['./transferencia-adm.page.scss'],
})
export class TransferenciaAdmPage implements OnInit {
  public turma: Array<Object> =[];
  public selectedArray :any = [];
  constructor(private router: Router) { 
    
    this.turma = [{
      "id": "1",
      "name": "Joaozin",
      "pTurma": "Turma 3",
      "nTurma": "Turma 2",
      "typeOfClass": "Ciclo 2",
      "status": "waiting",
      check: false,
    }, {
      "id": "2",
      "name": "Guilherme",
      "pTurma": "Turma 1",
      "nTurma": "Turma 2",
      "typeOfClass": "Ciclo 1",
      "status": "waiting",
      check: false,
    },{
      "id": "3",
      "name": "Maria",
      "pTurma": "Turma 3",
      "nTurma": "Turma 1",
      "typeOfClass": "Ciclo 2",
      "status": "waiting",
      check: false,
    },{
      "id": "4",
      "name": "Ana",
      "pTurma": "Turma 3",
      "nTurma": "Turma 2",
      "typeOfClass": "Ciclo 3",
      "status": "waiting",
      check: false,
    }
  ]
  }

  selectMember(data){
   
    if (data.check === false) {
       this.selectedArray.push(data);
     } else {
       
      let names = this.selectedArray.filter(j=> j.id !== data.id);
      this.selectedArray = names;
      
    }
    
   }
   
   finalizar() {
    console.log(this.selectedArray)
    alert("Tem certeza que deseja transferir esses alunos?")
     
     this.router.navigate(['home-administrador']);
   }
   newTransfer(){
    this.router.navigate(['new-transfer']);
     
   }
   

  ngOnInit() {
  }

}
