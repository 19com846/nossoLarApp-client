import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-pessoas-cadastradas',
  templateUrl: './pessoas-cadastradas.page.html',
  styleUrls: ['./pessoas-cadastradas.page.scss'],
})
export class PessoasCadastradasPage implements OnInit {
  public turma: Array < Object > = [];

  constructor(private router: Router) {
    this.turma = [
      {
        "id": "1",
        "name": "Joao",
        attendance1 : false,
        "attendance2": "false",
        "permission":"student",
      },{
        "id": "2",
        "name": "Guilherme",
        attendance1: false,
        "attendance2": "false", 
        "permission":"collaborator",
      },{
        "id": "3",
        "name": "Jorge",
        attendance1: false,
        "attendance2": "false", 
        "permission":"administrator",
      },{
        "id": "4",
        "name": "Ariel",
        attendance1: false,
        "attendance2": "false", 
        "permission":"student",
      },{
        "id": "5",
        "name": "Salmo",
        attendance1: false,
        "attendance2": "false", 
        "permission":"collaborator",
      },{
        "id": "6",
        "name": "Savio",
        attendance1: false,
        "attendance2": "false", 
        "permission":"administrator",
      },{
        "id": "7",
        "name": "Marcia",
        attendance1 : false,
        "attendance2": "false",
        "permission":"student",
      },{
        "id": "8",
        "name": "Natalia",
        attendance1: false,
        "attendance2": "false", 
        "permission":"collaborator",
      },{
        "id": "9",
        "name": "Chris",
        attendance1: false,
        "attendance2": "false", 
        "permission":"administrator",
      },{
        "id": "10",
        "name": "Wellintong",
        attendance1: false,
        "attendance2": "false", 
        "permission":"student",
      },{
        "id": "11",
        "name": "Pedro",
        attendance1: false,
        "attendance2": "false", 
        "permission":"collaborator",
      },{
        "id": "12",
        "name": "Silvana",
        attendance1: false,
        "attendance2": "false", 
        "permission":"administrator",
      }]
   }

  ngOnInit() {
  }
  goToAllAdministrators() {
    // alert("Todos os administradores");
    this.router.navigate(['all-admins']);
  }
  goToAllCollaborators() {
    // alert("Todos os colaboradores");
    this.router.navigate(['all-collabs']);
  }
  goToAllStudents() {
    // alert("Todos os estudantes");
    this.router.navigate(['all-students']);
  }
  novoCadastro() {
    this.router.navigate(['register']);
  }
}
