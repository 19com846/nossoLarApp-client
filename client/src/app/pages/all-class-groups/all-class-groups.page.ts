import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-class-groups',
  templateUrl: './all-class-groups.page.html',
  styleUrls: ['./all-class-groups.page.scss'],
})
export class AllClassGroupsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Ciclos() {
    this.router.navigate(['all-courses']);
  }
  cursosLivres() {
  }
  criarNovaTurma() {
  }
}
