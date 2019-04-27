import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelecionarTurmaParaChamadaPage } from './selecionar-turma-para-chamada.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionarTurmaParaChamadaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelecionarTurmaParaChamadaPage]
})
export class SelecionarTurmaParaChamadaPageModule {}
