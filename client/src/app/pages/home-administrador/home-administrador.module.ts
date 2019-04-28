import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeAdministradorPage } from './home-administrador.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAdministradorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeAdministradorPage]
})
export class HomeAdministradorPageModule {}
