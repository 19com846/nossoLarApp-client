import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'pessoas-cadastradas', loadChildren: './pages/pessoas-cadastradas/pessoas-cadastradas.module#PessoasCadastradasPageModule' },
  { path: 'home-administrador', loadChildren: './pages/home-administrador/home-administrador.module#HomeAdministradorPageModule' },
  { path: 'home-student', loadChildren: './pages/home-student/home-student.module#HomeStudentPageModule' },
  { path: 'selecionar-turma-para-chamada', loadChildren: './pages/selecionar-turma-para-chamada/selecionar-turma-para-chamada.module#SelecionarTurmaParaChamadaPageModule' },
  { path: 'minha-turma', loadChildren: './pages/minha-turma/minha-turma.module#MinhaTurmaPageModule' },
  { path: 'faltas', loadChildren: './pages/faltas/faltas.module#FaltasPageModule' },
  { path: 'transferencia-student', loadChildren: './pages/transferencia-student/transferencia-student.module#TransferenciaStudentPageModule' },
  { path: 'enroll-in-course', loadChildren: './pages/enroll-in-course/enroll-in-course.module#EnrollInCoursePageModule' },
  { path: 'chamada', loadChildren: './pages/chamada/chamada.module#ChamadaPageModule' },
  { path: 'matricula', loadChildren: './pages/matricula/matricula.module#MatriculaPageModule' },
  { path: 'transferencia-adm', loadChildren: './pages/transferencia-adm/transferencia-adm.module#TransferenciaAdmPageModule' },
  { path: 'todos-ciclos', loadChildren: './pages/todos-ciclos/todos-ciclos.module#TodosCiclosPageModule' },
  { path: 'informacao-turma', loadChildren: './pages/informacao-turma/informacao-turma.module#InformacaoTurmaPageModule' },
  { path: 'alunos-do-ciclo', loadChildren: './pages/alunos-do-ciclo/alunos-do-ciclo.module#AlunosDoCicloPageModule' },
  { path: 'student-details', loadChildren: './pages/student-details/student-details.module#StudentDetailsPageModule' },
  { path: 'create-class', loadChildren: './pages/create-class/create-class.module#CreateClassPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'new-transfer', loadChildren: './pages/new-transfer/new-transfer.module#NewTransferPageModule' },
  { path: 'search-student', loadChildren: './pages/search-student/search-student.module#SearchStudentPageModule' },


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
