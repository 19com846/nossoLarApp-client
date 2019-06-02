import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponse } from 'src/app/auth/auth-response';
import { LoginCredentials } from 'src/app/auth/login-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private credentials: LoginCredentials = {
    email: "",
    group: 1
  }
  public inputCredentials: String;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  
  }

  login() {
    this.auth.login(this.credentials).subscribe((data: AuthResponse) => {});
  }

  goToRegister(){
    this.router.navigate(['register']);
  }
    
  }
