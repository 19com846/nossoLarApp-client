import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Modal1PagePage } from './modal1-page.page';

const routes: Routes = [
  {
    path: '',
    component: Modal1PagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Modal1PagePage]
})
export class Modal1PagePageModule {}
