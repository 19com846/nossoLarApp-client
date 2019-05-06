import { Component, OnInit } from '@angular/core';
import { StaticAPIService } from 'src/app/services/static-api.service';

@Component({
  selector: 'app-all-collabs',
  templateUrl: './all-collabs.page.html',
  styleUrls: ['./all-collabs.page.scss'],
})
export class AllCollabsPage implements OnInit {

  collaborators: any;

  constructor(private api: StaticAPIService) { }

  ngOnInit() {
    this.getAllCollaborators();
  }

  getAllCollaborators() {
    this.api.getAllCollaborators().subscribe((data: Array<object>) => {
      this.collaborators = data;
    });
  }
}
