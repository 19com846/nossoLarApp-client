import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-cadastradas',
  templateUrl: './pessoas-cadastradas.page.html',
  styleUrls: ['./pessoas-cadastradas.page.scss'],
})
export class PessoasCadastradasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Administrador(){
    alert("Todos os administradores");
  }
  Colaboradores(){
    alert("Todos os colaboradores");

  }
  Alunos(){
    alert("Todos os administradores");

  }
  novoCadastro(){
    this.router.navigate(['register']);
  }
}
