import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Administrator } from './administrator';

@Component({
  selector: 'app-all-admins',
  templateUrl: './all-admins.page.html',
  styleUrls: ['./all-admins.page.scss'],
})
export class AllAdminsPage implements OnInit {

  administrators: Array<Administrator>;

  constructor(private api: APIService) { }

  ngOnInit() {
    this.getAllAdministrators();
  }

  getAllAdministrators() {
    this.api.getAllAdministrators().subscribe((data: Array<Administrator>) => {
      this.administrators = data;
    });
  }
}
