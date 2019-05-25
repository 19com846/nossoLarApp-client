import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home-student', loadChildren: './pages/home-student/home-student.module#HomeStudentPageModule' },
  { path: 'enroll-in-course', loadChildren: './pages/enroll-in-course/enroll-in-course.module#EnrollInCoursePageModule' },
  { path: 'student-details', loadChildren: './pages/student-details/student-details.module#StudentDetailsPageModule' },
  { path: 'create-class', loadChildren: './pages/create-class/create-class.module#CreateClassPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'new-transfer', loadChildren: './pages/new-transfer/new-transfer.module#NewTransferPageModule' },
  { path: 'search-student', loadChildren: './pages/search-student/search-student.module#SearchStudentPageModule' },
  { path: 'attendance', loadChildren: './pages/attendance/attendance.module#AttendancePageModule' },
  { path: 'absences', loadChildren: './pages/absences/absences.module#AbsencesPageModule' },
  { path: 'home-administrator', loadChildren: './pages/home-administrator/home-administrator.module#HomeAdministratorPageModule' },
  { path: 'class-group-details', loadChildren: './pages/class-group-details/class-group-details.module#ClassGroupDetailsPageModule' },
  { path: 'enrollments', loadChildren: './pages/enrollments/enrollments.module#EnrollmentsPageModule' },
  { path: 'my-class-group', loadChildren: './pages/my-class-group/my-class-group.module#MyClassGroupPageModule' },
  { path: 'all-users', loadChildren: './pages/all-users/all-users.module#AllUsersPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'class-group-attendance', loadChildren: './pages/class-group-attendance/class-group-attendance.module#ClassGroupAttendancePageModule' },
  { path: 'all-class-groups', loadChildren: './pages/all-class-groups/all-class-groups.module#AllClassGroupsPageModule' },
  { path: 'all-courses', loadChildren: './pages/all-courses/all-courses.module#AllCoursesPageModule' },
  { path: 'pending-transfers', loadChildren: './pages/pending-transfers/pending-transfers.module#PendingTransfersPageModule' },
  { path: 'transfer-class-group', loadChildren: './pages/transfer-class-group/transfer-class-group.module#TransferClassGroupPageModule' },
  { path: 'class-group-students', loadChildren: './pages/class-group-students/class-group-students.module#ClassGroupStudentsPageModule' },
  { path: 'all-students', loadChildren: './pages/all-students/all-students.module#AllStudentsPageModule' },
  { path: 'login-password', loadChildren: './pages/login-password/login-password.module#LoginPasswordPageModule' },

];


@NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }
  ]
 }
