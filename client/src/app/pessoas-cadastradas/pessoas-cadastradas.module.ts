import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PessoasCadastradasPage } from './pessoas-cadastradas.page';

const routes: Routes = [
  {
    path: '',
    component: PessoasCadastradasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PessoasCadastradasPage]
})
export class PessoasCadastradasPageModule {}
