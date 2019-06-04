import { Transfer } from './../../interfaces/transfer';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { APIService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions  } from '@angular/http';
@Component({
  selector: 'app-pending-transfers',
  templateUrl: './pending-transfers.page.html',
  styleUrls: ['./pending-transfers.page.scss'],
})
export class PendingTransfersPage implements OnInit {
  public transfer: Array<Transfer>;
  public selectedArray: any = [];

  constructor(private navCtrl:NavController, private router: Router, private api: APIService) { 
    
    
  }
   newTransfer(){
    this.router.navigate(['new-transfer']);  
   }
   
   accept(id) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });
    const body = '';
    this.api.patchTransferRequest(id,body,requestOptions);
    this.ngOnInit();
   }

   cancel(id) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });
    const body = '';
    this.api.patchTransferRequestReject(id,body,requestOptions);
    this.ngOnInit();
   }
  ngOnInit() {
    this.getAllTransferRequests();
  }

  getAllTransferRequests(){
    this.api.getTransferRequest().subscribe((data: Array<Transfer>)=> {
      this.transfer = data;
    });  
  };   
  
}
