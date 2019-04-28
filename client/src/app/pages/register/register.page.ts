import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public inputName:string;
  public inputEmail:string;
  public inputPhone:string;
  constructor(private router: Router) { }


  registerPerson(){
    
    this.router.navigate(['home']);
  }
  ngOnInit() {
  }

}
