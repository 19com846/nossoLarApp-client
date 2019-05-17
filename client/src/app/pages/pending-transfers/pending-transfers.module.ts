import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PendingTransfersPage } from './pending-transfers.page';

const routes: Routes = [
  {
    path: '',
    component: PendingTransfersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PendingTransfersPage]
})
export class PendingTransfersPageModule {}
