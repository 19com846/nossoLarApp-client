import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InformacaoTurmaPage } from './informacao-turma.page';

const routes: Routes = [
  {
    path: '',
    component: InformacaoTurmaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InformacaoTurmaPage]
})
export class InformacaoTurmaPageModule {}
