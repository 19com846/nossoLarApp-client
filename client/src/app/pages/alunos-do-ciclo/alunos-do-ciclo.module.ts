import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlunosDoCicloPage } from './alunos-do-ciclo.page';

const routes: Routes = [
  {
    path: '',
    component: AlunosDoCicloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlunosDoCicloPage]
})
export class AlunosDoCicloPageModule {}
