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
   
  }
  Matriculas(){
    //alert("Pagina de matriculas")
    this.router.navigate(['matricula']);
  }
  Turmas(){
    
    this.router.navigate(['todos-ciclos']);
  }
  buscarAluno(){
    this.router.navigate(['search-student'])    
  }
  transferencia(){
   // alert("Pagina transferencia")
   this.router.navigate(['transferencia-adm']);
  }
}
