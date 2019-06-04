import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ModalPagePage } from './../modal-page/modal-page.page';

import { IonicModule } from '@ionic/angular';

import { NewTransferCollabPage } from './new-transfer-collab.page';

const routes: Routes = [
  {
    path: '',
    component: NewTransferCollabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewTransferCollabPage, ModalPagePage],
  entryComponents: [ModalPagePage]
})
export class NewTransferCollabPageModule {}
