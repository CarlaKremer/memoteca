import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar-pensamentos', pathMatch: 'full' },
  { path: 'criar-pensamento', component: CriarPensamentoComponent },
  { path: 'listar-pensamentos', component: ListarPensamentosComponent },
  { path: 'editar-pensamento/:id', component: CriarPensamentoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
