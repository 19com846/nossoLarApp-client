import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'pessoas-cadastradas', loadChildren: './pessoas-cadastradas/pessoas-cadastradas.module#PessoasCadastradasPageModule' },
  { path: 'home-administrador', loadChildren: './home-administrador/home-administrador.module#HomeAdministradorPageModule' },
  { path: 'todas-as-turmas', loadChildren: './todas-as-turmas/todas-as-turmas.module#TodasAsTurmasPageModule' },
  { path: 'home-student', loadChildren: './home-student/home-student.module#HomeStudentPageModule' },
  { path: 'selecionar-turma-para-chamada', loadChildren: './selecionar-turma-para-chamada/selecionar-turma-para-chamada.module#SelecionarTurmaParaChamadaPageModule' },
  { path: 'minha-turma', loadChildren: './minha-turma/minha-turma.module#MinhaTurmaPageModule' },
  { path: 'faltas', loadChildren: './faltas/faltas.module#FaltasPageModule' },  { path: 'transferencia-student', loadChildren: './transferencia-student/transferencia-student.module#TransferenciaStudentPageModule' },
  { path: 'cadastrar-novo-curso-student', loadChildren: './cadastrar-novo-curso-student/cadastrar-novo-curso-student.module#CadastrarNovoCursoStudentPageModule' },
  { path: 'chamada', loadChildren: './chamada/chamada.module#ChamadaPageModule' },





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
