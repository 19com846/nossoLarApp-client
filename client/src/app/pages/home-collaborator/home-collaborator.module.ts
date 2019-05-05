import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeCollaboratorPage } from './home-collaborator.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCollaboratorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeCollaboratorPage]
})
export class HomeCollaboratorPageModule {}
