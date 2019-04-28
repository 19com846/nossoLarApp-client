import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodosCiclosPage } from './todos-ciclos.page';

const routes: Routes = [
  {
    path: '',
    component: TodosCiclosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TodosCiclosPage]
})
export class TodosCiclosPageModule {}
