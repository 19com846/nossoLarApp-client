import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SeeStudentInfoPage } from './see-student-info.page';

const routes: Routes = [
  {
    path: '',
    component: SeeStudentInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SeeStudentInfoPage]
})
export class SeeStudentInfoPageModule {}
