import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public dataLogin : Array<Object> = [];
  public inputEmail:string;
  public inputPhone:string;
  

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

  


  login(){
    /*manda para api this.inputEmail e this.inputPhone. Se retornar 200
    get all datas from this person
    id
    name
    email
    phone
    permission
*/
    if(this.inputEmail ==="stu")
    {
      this.router.navigate(['home-student']);
      alert('student');
    } else if (this.inputEmail ==="col") {
      this.router.navigate(['home-administrador']);
      alert("collaborators");
    } else if (this.inputEmail ==="adm") {
      alert ("administrators")
    this.router.navigate(['home-administrador']);
    }
      else {
        alert("put on email: stu/adm/col");
      }
    }

  

  ngOnInit() {
   
  }

}
