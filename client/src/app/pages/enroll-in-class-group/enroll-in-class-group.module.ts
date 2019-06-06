import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnrollInClassGroupPage } from './enroll-in-class-group.page';

const routes: Routes = [
  {
    path: '',
    component: EnrollInClassGroupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnrollInClassGroupPage]
})
export class EnrollInClassGroupPageModule {}
