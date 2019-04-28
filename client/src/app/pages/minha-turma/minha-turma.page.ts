import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-minha-turma',
  templateUrl: './minha-turma.page.html',
  styleUrls: ['./minha-turma.page.scss'],
})
export class MinhaTurmaPage implements OnInit {
  public turma: Array<Object> =[];

  constructor(private router: Router) { 

    /*
      receber por parametro o id da turma
       get api/turmas/id
    */
    this.turma = [{ 
      "id": "456",
       "name": "Ciclo 02",
        "typeOfClass": "Ciclo 02",
         "location": "Sala 7/8",
        "weekday": "segunda-feira",
         "startingWeek": "20",
         "endingWeek": "46",
          "startTime": "13:00",
          "endTime": "15:30",
          "collaborators": [ 
               { "id": "123124",
                   "name": "Joaozin",
                    "email": "fulano.tal@gmail.com",
                    "phone": "19999091120" },
              { "id": "897987",
                  "name": "Sicrano",
                  "email": "sicrano.silva@hotmail.com",
                  "phone": "null"
                 } ] }]
  }

  faltas() {
    this.router.navigate(['faltas']);
  }

  transferencia() {
    this.router.navigate(['transferencia-student']);
  }
  ngOnInit() {
  }

}
