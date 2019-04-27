import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.page.html',
  styleUrls: ['./home-administrador.page.scss'],
})
export class HomeAdministradorPage implements OnInit {

  public dataLogin : Array<Object> = [];

  constructor(private router: Router) { 

    this.dataLogin = [
      {
        "id": "123",
        "name:": "Joao",
        "email": "a@a.com",
        "phone": "111111111",
        "permission": "administrators",
        //collaborators,administrators
      }
    ]
  }

  ngOnInit() {
  }

  Cadastros(){
    this.router.navigate(['pessoas-cadastradas']);
  }
  Chamada(){
    this.router.navigate(['selecionar-turma-para-chamada']);
    alert("Pagina de chamada")
  }
  Matriculas(){
    alert("Pagina de matriculas")
  }
  Turmas(){
    alert("Pagina de turmas")
    this.router.navigate(['todas-as-turmas']);
  }
  buscarAluno(){
    alert("Pagina buscar aluno")
  }
  transferencia(){
    alert("Pagina transferencia")
  }
}
