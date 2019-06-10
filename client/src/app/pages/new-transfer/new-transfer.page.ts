import { Enrollment } from './../../interfaces/enrollment';
import { ClassGroup } from './../../interfaces/class-group';
import { Student } from './../all-students/student';
import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ModalPagePage } from './../modal-page/modal-page.page';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.page.html',
  styleUrls: ['./new-transfer.page.scss'],
})
export class NewTransferPage implements OnInit {

  public turmas: Array<Object> =[];
  public students: any = [];
  student: Array<Student>;
  classes: Array<ClassGroup>;
  public selectItem;
  items: Array<Student>;
  enrollment: Array<Enrollment>;
  studentEnrollment: any = [];
  studentData: any =[];

  constructor(private api: APIService,  private router: Router, public modalController: ModalController) { }

  ngOnInit() {
   
 } 


}
