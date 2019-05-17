import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TransferClassGroupPage } from './transfer-class-group.page';

const routes: Routes = [
  {
    path: '',
    component: TransferClassGroupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TransferClassGroupPage]
})
export class TransferClassGroupPageModule {}
