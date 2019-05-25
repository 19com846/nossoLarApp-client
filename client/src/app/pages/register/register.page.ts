import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { User } from  '../../auth/user';
import { AuthService } from '../../auth/auth.service';
import { RegisterResponse } from '../../auth/register-response';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private user: User = {
    email: "",
    first_name: "",
    last_name: "",
    group: 1,
    password: "",
    phone: ""

  }

  public inputEmail: String;
  public inputName: String;

  constructor(private router: Router, private auth: AuthService,
              private alertCtrl: AlertController) { 
  }

  async presentAlert(header: string, message: string, ) {
    const alert = await this.alertCtrl.create({
        header: header,
        message: message,
        buttons: ['OK']
    });
    await alert.present();
  }

  registerPerson(){
    this.auth.register(this.user).subscribe((data: RegisterResponse) => {
      this.presentAlert("Sucesso", "Conta criada com sucesso").then(() => {
        this.router.navigate(['home']);
      });
    }, (err) => {
      if(err.status == 400) {
        this.presentAlert("Erro", "Sua conta não pode ser criada com esses valores");
      } else if (err.status == 500) {
        this.presentAlert("Erro", "Erro interno no servidor, tente novamente mais tarde");
      }
    });
  }

  ngOnInit() {
  }

}
