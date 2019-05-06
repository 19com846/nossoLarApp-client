import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllAdminsPage } from './all-admins.page';

const routes: Routes = [
  {
    path: '',
    component: AllAdminsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllAdminsPage]
})
export class AllAdminsPageModule {}
