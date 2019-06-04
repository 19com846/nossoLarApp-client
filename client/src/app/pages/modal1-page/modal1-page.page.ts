import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { ClassGroup } from './../../interfaces/class-group';
import { Enrollment } from './../../interfaces/enrollment';
import { Headers, Http, RequestOptions  } from '@angular/http';

@Component({
  selector: 'app-modal1-page',
  templateUrl: './modal1-page.page.html',
  styleUrls: ['./modal1-page.page.scss'],
})
export class Modal1PagePage implements OnInit {
  id;
  classes: Array<ClassGroup>;
  enrollment: Array<Enrollment>;
  public groupId;
  public classId;

  constructor(private api: APIService, public modalController: ModalController, public navParams: NavParams) { 
  this.id=this.navParams.get('value');
  }
  ngOnInit() {
    this.getEnrollment();
  }

  getAllClasses(id) {
    this.api.getAllClassGroups().subscribe((data: Array<ClassGroup>) => {
        this.classes = data;
    });
  }

  getEnrollment() {
    this.api.getEnrollments(this.id).subscribe((data: Array<Enrollment>) => {
      this.enrollment = data;
      this.getAllClasses(this.enrollment[0].class_group.id);
    });
}
onChangeGroup(value){
  this.groupId=value.target.value.class_group.id;
}

onChagenClass(value){
  this.classId=value.target.value.id;
}
  dismiss(){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });
    let body = {
      "student_id": this.id,
      "class_group_id": this.groupId,
      "target_group_id": this.classId,
    }
    this.api.postTransferRequest(body,requestOptions);
    this.modalController.dismiss();
  }
}

