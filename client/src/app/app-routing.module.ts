import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'pessoas-cadastradas', loadChildren: './pages/pessoas-cadastradas/pessoas-cadastradas.module#PessoasCadastradasPageModule' },
  { path: 'todas-as-turmas', loadChildren: './pages/todas-as-turmas/todas-as-turmas.module#TodasAsTurmasPageModule' },
  { path: 'home-student', loadChildren: './pages/home-student/home-student.module#HomeStudentPageModule' },
  { path: 'selecionar-turma-para-chamada', loadChildren: './pages/selecionar-turma-para-chamada/selecionar-turma-para-chamada.module#SelecionarTurmaParaChamadaPageModule' },
  { path: 'minha-turma', loadChildren: './pages/minha-turma/minha-turma.module#MinhaTurmaPageModule' },
  { path: 'faltas', loadChildren: './pages/faltas/faltas.module#FaltasPageModule' },
  { path: 'transferencia-student', loadChildren: './pages/transferencia-student/transferencia-student.module#TransferenciaStudentPageModule' },
  { path: 'cadastrar-novo-curso-student', loadChildren: './pages/cadastrar-novo-curso-student/cadastrar-novo-curso-student.module#CadastrarNovoCursoStudentPageModule' },
  { path: 'chamada', loadChildren: './pages/chamada/chamada.module#ChamadaPageModule' },
  { path: 'home-collaborator', loadChildren: './pages/home-collaborator/home-collaborator.module#HomeCollaboratorPageModule' },
  { path: 'all-students', loadChildren: './pages/all-students/all-students.module#AllStudentsPageModule' },
  { path: 'all-collabs', loadChildren: './pages/all-collabs/all-collabs.module#AllCollabsPageModule' },
  { path: 'all-admins', loadChildren: './pages/all-admins/all-admins.module#AllAdminsPageModule' },


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
