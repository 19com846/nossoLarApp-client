import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyClassGroupsPage } from './my-class-groups.page';

const routes: Routes = [
  {
    path: '',
    component: MyClassGroupsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyClassGroupsPage]
})
export class MyClassGroupsPageModule {}
