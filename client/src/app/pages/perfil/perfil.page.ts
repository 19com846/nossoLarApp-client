import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public me: Array<Object> =[];

  constructor(private router: Router) { 

    this.me = [{ 
     "id": "190238019",
     "name": "Joao Guilherme", 
     "email": "joaobenetasso@gmail.com", 
     "phone": "199983776547", 
     "permission": "administrators" }]
  }

  editInfo(){
    alert("Editar informação");
  }
  ngOnInit() {
  }

}
