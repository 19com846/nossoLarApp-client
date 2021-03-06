import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home-student', loadChildren: './pages/home-student/home-student.module#HomeStudentPageModule' },
  { path: 'student-details', loadChildren: './pages/student-details/student-details.module#StudentDetailsPageModule' },
  { path: 'create-class', loadChildren: './pages/create-class/create-class.module#CreateClassPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'new-transfer', loadChildren: './pages/new-transfer/new-transfer.module#NewTransferPageModule' },
  { path: 'search-student', loadChildren: './pages/search-student/search-student.module#SearchStudentPageModule' },
  { path: 'attendance/:classGroupId', loadChildren: './pages/attendance/attendance.module#AttendancePageModule' },
  { path: 'absences/:classGroupId', loadChildren: './pages/absences/absences.module#AbsencesPageModule' },
  { path: 'home-administrator', loadChildren: './pages/home-administrator/home-administrator.module#HomeAdministratorPageModule' },
  { path: 'home-collaborator', loadChildren: './pages/home-collaborator/home-collaborator.module#HomeCollaboratorPageModule' },
  { path: 'class-group-details/:id', loadChildren: './pages/class-group-details/class-group-details.module#ClassGroupDetailsPageModule' },
  { path: 'enrollments', loadChildren: './pages/enrollments/enrollments.module#EnrollmentsPageModule' },
  { path: 'my-class-group/:classGroupId', loadChildren: './pages/my-class-group/my-class-group.module#MyClassGroupPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'class-group-attendance', loadChildren: './pages/class-group-attendance/class-group-attendance.module#ClassGroupAttendancePageModule' },
  { path: 'all-class-groups', loadChildren: './pages/all-class-groups/all-class-groups.module#AllClassGroupsPageModule' },
  { path: 'all-class-groups/:id', loadChildren: './pages/all-class-groups/all-class-groups.module#AllClassGroupsPageModule' },
  { path: 'all-courses', loadChildren: './pages/all-courses/all-courses.module#AllCoursesPageModule' },
  { path: 'all-users', loadChildren: './pages/all-users/all-users.module#AllUsersPageModule' },
  { path: 'all-students', loadChildren: './pages/all-students/all-students.module#AllStudentsPageModule' },
  { path: 'all-admins', loadChildren: './pages/all-admins/all-admins.module#AllAdminsPageModule' },
  { path: 'all-collabs', loadChildren: './pages/all-collabs/all-collabs.module#AllCollabsPageModule' },
  { path: 'pending-transfers', loadChildren: './pages/pending-transfers/pending-transfers.module#PendingTransfersPageModule' },
  { path: 'transfer-class-group/:classGroupId', loadChildren: './pages/transfer-class-group/transfer-class-group.module#TransferClassGroupPageModule' },
  { path: 'class-group-students', loadChildren: './pages/class-group-students/class-group-students.module#ClassGroupStudentsPageModule' },
  { path: 'login-password', loadChildren: './pages/login-password/login-password.module#LoginPasswordPageModule' },
  { path: 'my-class-groups', loadChildren: './pages/my-class-groups/my-class-groups.module#MyClassGroupsPageModule' },
  { path: 'see-student-info/:studentId', loadChildren: './pages/see-student-info/see-student-info.module#SeeStudentInfoPageModule' },
  { path: 'modal-page', loadChildren: './pages/modal-page/modal-page.module#ModalPagePageModule' },
  { path: 'new-transfer-collab', loadChildren: './pages/new-transfer-collab/new-transfer-collab.module#NewTransferCollabPageModule' },
  { path: 'modal1-page', loadChildren: './pages/modal1-page/modal1-page.module#Modal1PagePageModule' },
  { path: 'all-lesson/:idClass', loadChildren: './pages/all-lesson/all-lesson.module#AllLessonPageModule' },
  { path: 'all-attendance-group/:idClass/:lessonId', loadChildren: './pages/all-attendance-group/all-attendance-group.module#AllAttendanceGroupPageModule' },
  { path: 'enroll-in-class-group', loadChildren: './pages/enroll-in-class-group/enroll-in-class-group.module#EnrollInClassGroupPageModule' },

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
