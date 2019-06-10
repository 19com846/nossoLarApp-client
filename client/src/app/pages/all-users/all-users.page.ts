import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.page.html',
  styleUrls: ['./all-users.page.scss'],
})
export class AllUsersPage implements OnInit {
  public turma: Array < Object > = [];

  constructor(private router: Router) {  }

  ngOnInit() {
  }
  goToAllAdministrators() {
    this.router.navigate(['all-admins']);
  }
  goToAllCollaborators() {
    this.router.navigate(['all-collabs']);
  }
  goToAllStudents() {

    this.router.navigate(['all-students']);
  }
  novoCadastro() {
    this.router.navigate(['register']);
  }
}
