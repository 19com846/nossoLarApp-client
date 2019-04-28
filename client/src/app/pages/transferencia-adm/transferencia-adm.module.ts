import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TransferenciaAdmPage } from './transferencia-adm.page';

const routes: Routes = [
  {
    path: '',
    component: TransferenciaAdmPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TransferenciaAdmPage]
})
export class TransferenciaAdmPageModule {}
