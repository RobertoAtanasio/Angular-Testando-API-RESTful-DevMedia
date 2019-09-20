import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos/produtos.component';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';

const appRoutes: Routes = [
  { path: 'produtos', component: ProdutosComponent},
  { path: 'produtos/:id', component: EditarProdutosComponent},
  { path: 'resumo', component: ResumoComponent},
  { path: 'consulta', component: ConsultaComponent},
  { path: 'faturamento', component: FaturamentoComponent},
  { path: '**', redirectTo: 'resumo'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
