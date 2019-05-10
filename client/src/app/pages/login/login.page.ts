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

  ngOnInit() {
  }

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
      if (this.inputCredentials === 'stu') {
        this.router.navigate(['home-student']);
        // alert('student');
      } else if (this.inputCredentials === 'collab') {
      this.router.navigate(['home-collaborator']);
      }
    }

    goToRegister(){
      this.router.navigate(['register']);
    }
    /*manda para api this.inputEmail e this.inputPhone. Se retornar 200
    get all datas from this person
    id
    name
    email
    phone
    permission
    */

    //TO DO - FAZER ISSO FUNCIONAR
    

    // if(this.inputEmail ==="stu")
    // {
    //   this.router.navigateByUrl('/menu/menu/home-student');
    // } else if (this.inputEmail ==="col") {
    //   this.router.navigate(['home-administrador']);
     
    // } else if (this.inputEmail ==="adm") {
     
    // this.router.navigate(['home-administrador']);
    // }
    //   else {
    //     alert("put on email: stu/adm/col");
    //   }
  }
