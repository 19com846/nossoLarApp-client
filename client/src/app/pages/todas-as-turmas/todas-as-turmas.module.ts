import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodasAsTurmasPage } from './todas-as-turmas.page';

const routes: Routes = [
  {
    path: '',
    component: TodasAsTurmasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TodasAsTurmasPage]
})
export class TodasAsTurmasPageModule {}
