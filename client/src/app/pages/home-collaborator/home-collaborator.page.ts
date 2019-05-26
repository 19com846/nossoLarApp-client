import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-collaborator',
  templateUrl: './home-collaborator.page.html',
  styleUrls: ['./home-collaborator.page.scss'],
})
export class HomeCollaboratorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  rollCall() {
    this.router.navigate(['class-group-attendance']);
  }

  goToAllUsers() {
    this.router.navigate(['all-users']);
  }

  goToAllClassGroups() {
    this.router.navigate(['all-class-groups']);
  }

  goToPendingTransfers() {
    this.router.navigate(['pending-transfers']);
  }

  goToMyClassGroups() {
    this.router.navigate(['my-class-groups']);
  }

}
