import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllClassGroupsPage } from './all-class-groups.page';

const routes: Routes = [
  {
    path: '',
    component: AllClassGroupsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllClassGroupsPage]
})
export class AllClassGroupsPageModule {}
