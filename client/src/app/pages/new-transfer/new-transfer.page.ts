import { Enrollment } from './../../interfaces/enrollment';
import { ClassGroup } from './../../interfaces/class-group';
import { Student } from './../all-students/student';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.page.html',
  styleUrls: ['./new-transfer.page.scss'],
})
export class NewTransferPage implements OnInit {

 

  constructor(private api: APIService,  private router: Router) {}

  ngOnInit() {
    
  }

}
