import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClassGroupStudentsPage } from './class-group-students.page';

const routes: Routes = [
  {
    path: '',
    component: ClassGroupStudentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClassGroupStudentsPage]
})
export class ClassGroupStudentsPageModule {}
