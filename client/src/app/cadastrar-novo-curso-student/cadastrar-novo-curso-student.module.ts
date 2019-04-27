import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarNovoCursoStudentPage } from './cadastrar-novo-curso-student.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarNovoCursoStudentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarNovoCursoStudentPage]
})
export class CadastrarNovoCursoStudentPageModule {}
