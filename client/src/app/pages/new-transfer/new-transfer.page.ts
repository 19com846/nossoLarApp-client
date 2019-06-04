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
   this.getAllStudents();
 } 

 getAllStudents() {
   this.api.getAllStudents().subscribe((data: Array<Student>) => {
     this.student = data;
     this.items = data;
     console.log(this.student)
     this.getAllClasses();
   });
 }

 getAllClasses() {
   this.api.getAllClassGroups().subscribe((data: Array<ClassGroup>) => {
     this.classes = data;
     console.log(this.classes)
   });
 }

 async modal(id) {
   const modal = await this.modalController.create({
     component: ModalPagePage,
     componentProps: {value: id}
   });
 await modal.present();
 }

 initializeItems() {
   this.items = this.student;
 }

 getItems(ev: any) {
   // Reset items back to all of the items
   this.initializeItems();

   // set val to the value of the searchbar
   const val = ev.target.value;

   // if the value is an empty string don't filter the items
   if (val && val.trim() != '') {
     this.items = this.items.filter((item) => {
       return (item.first_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
 }

}
