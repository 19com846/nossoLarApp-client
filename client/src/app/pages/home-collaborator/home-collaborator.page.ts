import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-collaborator',
  templateUrl: './home-collaborator.page.html',
  styleUrls: ['./home-collaborator.page.scss'],
})
export class HomeCollaboratorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectTurma() {
    this.router.navigate(['selecionar-turma-para-chamada']);
  }

  goToAllUser() {
    this.router.navigate(['pessoas-cadastradas']);
  }

}
