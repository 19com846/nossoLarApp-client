import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClassGroupDetailsPage } from './class-group-details.page';

const routes: Routes = [
  {
    path: '',
    component: ClassGroupDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClassGroupDetailsPage]
})
export class ClassGroupDetailsPageModule {}
