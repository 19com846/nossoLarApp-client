import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { ClassGroup } from './../../interfaces/class-group';
import { Enrollment } from './../../interfaces/enrollment';
import { Headers, Http, RequestOptions  } from '@angular/http';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  id;
  classes: Array<ClassGroup>;
  enrollment: Array<Enrollment>;
  public selectClass;
  public selectGroup;

  constructor(private api: APIService, public modalController: ModalController, public navParams: NavParams) { 
  this.id=this.navParams.get('value');
  }
  ngOnInit() {
    this.getAllClasses();
  }

  getAllClasses() {
    this.api.getAllClassGroups().subscribe((data: Array<ClassGroup>) => {
      this.classes = data;
      console.log(this.classes)
      this.getEnrollment();
    });
  }

  getEnrollment() {
    this.api.getEnrollments(this.id).subscribe((data: Array<Enrollment>) => {
      this.enrollment = data;
      console.log(this.enrollment)
    });
}

  dismiss(){
    const getIdClass = this.classes.filter(c=>{
       if(c.title == this.selectClass){
         return c.id;
       }
    })
    const getIdEnrollment = this.enrollment.filter(c=>{
       if(c.class_group.title == this.selectGroup){
         return c.id;
       }
    })

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });
    let body = {
      "student_id": this.id,
      "class_group_id": getIdClass[0].id,
      "target_group_id": getIdEnrollment[0].id,
    }
    this.api.postTransferRequest(body,requestOptions);

    this.modalController.dismiss();
  }
}
