import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.page.html',
  styleUrls: ['./create-class.page.scss'],
})
export class CreateClassPage implements OnInit {

  selectedCourse: string='';

  constructor(private navCtrl:NavController) { }
  pop(){
    this.navCtrl.pop();
  }
  ngOnInit() {
  }

}
