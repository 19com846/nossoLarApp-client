import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todas-as-turmas',
  templateUrl: './todas-as-turmas.page.html',
  styleUrls: ['./todas-as-turmas.page.scss'],
})
export class TodasAsTurmasPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Ciclos(){
    
    this.router.navigate(['todos-ciclos']);
  }
  cursosLivres(){
    
  }
  criarNovaTurma(){
    
  }
}
