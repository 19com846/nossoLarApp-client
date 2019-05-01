import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public dataLogin: Array<Object> = [];
  public inputCredentials: String;

  constructor(private router: Router) {
    this.dataLogin = [
      {
        "id": "123",
        "name:" : "Joao",
        "email": "a@a.com",
        "phone": "111111111",
        "permission" : "student",
        //collaborators,student,administrators
      }
    ]

   }

  login() {
    /*manda para api this.inputEmail e this.inputPhone. Se retornar 200
    get all datas from this person
    id
    name
    email
    phone
    permission
    */
    if (this.inputCredentials === 'stu') {
      this.router.navigate(['home-student']);
      // alert('student');
    } else {
      // alert ("administrators")
    this.router.navigate(['home-administrador']);
    }
  }
  ngOnInit() {

  }
}
