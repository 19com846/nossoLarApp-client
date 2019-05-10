import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [

  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: 'home-student', loadChildren: './../../pages/home-student/home-student.module#HomeStudentPageModule' },
      { path: 'profile', loadChildren: './../../pages/profile/profile.module#ProfilePageModule' }
    ]
  }, {
    path: '',
    redirectTo: '/home-student'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
