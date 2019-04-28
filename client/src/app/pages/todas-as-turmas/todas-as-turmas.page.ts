import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todas-as-turmas',
  templateUrl: './todas-as-turmas.page.html',
  styleUrls: ['./todas-as-turmas.page.scss'],
})
export class TodasAsTurmasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Ciclos(){
    alert("Pagina todos os ciclos")
  }
  cursosLivres(){
    alert("Pagina cursos livres")
  }
  criarNovaTurma(){
    alert("Pagina criar nova turma")
  }
}
