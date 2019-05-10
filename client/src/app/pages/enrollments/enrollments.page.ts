import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.page.html',
  styleUrls: ['./enrollments.page.scss'],
})
export class EnrollmentsPage implements OnInit {


  public turma: Array < Object > = [];
  public selectedArray: any = [];

  constructor(private router: Router) {
    this.turma = [{
      "id": "1",
      "name": "Joao Guilherme",
      "typeOfClass": "Ciclo 01",
      "alunos": "120",
      "turma": "1",
      check: false,
    }, {
      "id": "2",
      "name": "Rafael",
      "typeOfClass": "Ciclo 01",
      "turma": "2",
      "alunos": "15",
      check: false,
    },
    {
      "id": "3",
      "name": "Gomes",
      "typeOfClass": "Ciclo 01",
      "turma": "3",
      "alunos": "69",
      check: false,
    },
    {
      "id": "4",
      "name": "Henrique",
      "typeOfClass": "Ciclo 01",
      "turma": "4",
      "alunos": "71",
      check: false,
    }, {
      "id": "5",
      "name": "Estevao",
      "typeOfClass": "Ciclo 01",
      "turma": "1",
      "alunos": "120",
      check: false,
    },
    {
      "id": "6",
      "name": "Joao Guilherme",
      "typeOfClass": "Turma Livre",
      "turma": "Palestra X",
      "alunos": "12",
      check: false,
    },
  ]
   }

   selectMember(data) {

    if (data.check === false) {
      this.selectedArray.push(data);
    } else {

      let names = this.selectedArray.filter(j => j.id !== data.id);
      this.selectedArray = names;

    }

  }

  finalizar() {
    console.log(this.selectedArray)

    this.router.navigate(['home-administrador']);
  }

  ngOnInit() {}

}
