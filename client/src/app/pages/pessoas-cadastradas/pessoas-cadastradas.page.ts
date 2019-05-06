import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-pessoas-cadastradas',
  templateUrl: './pessoas-cadastradas.page.html',
  styleUrls: ['./pessoas-cadastradas.page.scss'],
})
export class PessoasCadastradasPage implements OnInit {

  constructor(private router: Router) { }

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
